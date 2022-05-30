import logging
import time
from dataclasses import dataclass
from queue import Queue
from typing import Optional

import hivemind
import pytorch_lightning as pl
from hivemind.optim.progress_tracker import GlobalTrainingProgress
from lightning.storage import Path
from pytorch_lightning import Callback
from pytorch_lightning.callbacks import ProgressBarBase
from pytorch_lightning.callbacks.progress.base import get_standard_metrics
from pytorch_lightning.loggers import TensorBoardLogger

_log = logging.getLogger(__name__)


@dataclass(frozen=False)
class DebugGlobalState(GlobalTrainingProgress):
    def increment(self):
        self.samples_accumulated += 1
        if self.samples_accumulated >= self.target_batch_size:
            self.epoch += 1
            self.samples_accumulated = 0


class CollaborativeProgressTracker(Callback):
    """This tracks the global state."""

    def __init__(self, work, debug: bool) -> None:
        super().__init__()
        self.work = work
        self.debug = debug
        self.is_enabled = False
        self._trainer = None

        self.epoch = 0
        self.state = DebugGlobalState(
            epoch=0,
            samples_accumulated=0,
            target_batch_size=512,
            num_peers=5,
            eta_next_epoch=time.time(),
            next_fetch_time=time.time() + 100,
            num_clients=5,
        )

    def on_train_batch_end(
        self, trainer, pl_module, outputs, batch, batch_idx: int
    ) -> None:
        self.work.progress_state = self.progress_state

    @property
    def progress_state(self) -> dict:
        state = self.global_state
        s = time.gmtime(time.time())
        return {
            "progress": int(
                (state.samples_accumulated / state.target_batch_size) * 100
            ),
            "epoch": state.epoch,
            "eta": time.strftime("%H:%M:%S", s),
            "peers": state.num_peers,
        }

    @property
    def global_state(self) -> GlobalTrainingProgress:
        if self.debug:
            self.state.increment()
            return self.state
        return self.hivemind_optimizer.tracker.global_progress

    @property
    def hivemind_optimizer(self) -> hivemind.Optimizer:
        return self._trainer.optimizers[0]

    def on_fit_start(
        self, trainer: "pl.Trainer", pl_module: "pl.LightningModule"
    ) -> None:
        self._trainer = trainer


class TrainMetrics(Callback):
    def __init__(self, work, debug: bool) -> None:
        super().__init__()
        self.work = work
        self.debug = debug
        self._trainer = None
        self._current_epoch = -1

    def on_fit_start(
        self, trainer: "pl.Trainer", pl_module: "pl.LightningModule"
    ) -> None:
        self._trainer = trainer

    def on_train_batch_end(
        self,
        trainer: "pl.Trainer",
        pl_module: "pl.LightningModule",
        outputs,
        batch,
        batch_idx: int,
    ) -> None:
        if self.debug:
            metrics = get_standard_metrics(trainer, pl_module)
            self.work.loss = metrics["loss"]
            return
        if self.hivemind_optimizer.local_epoch != self._current_epoch:
            metrics = get_standard_metrics(trainer, pl_module)
            self.work.loss = metrics["loss"]
            self._current_epoch = self.hivemind_optimizer.local_epoch

    @property
    def hivemind_optimizer(self) -> hivemind.Optimizer:
        return self._trainer.optimizers[0]


class CollaborativeProgressBar(ProgressBarBase):
    """This callback allows the main work to get stdout from the lightning script."""

    def __init__(self, work, maxsize=100):
        super().__init__()
        self._enabled = True
        self._logs_queue = Queue(maxsize=maxsize)
        self.work = work

    def disable(self):
        self._enabled = False

    def enable(self) -> None:
        self._enabled = True

    def on_train_batch_end(self, trainer, pl_module, outputs, batch, batch_idx) -> None:
        if self._enabled:
            metrics = self.get_metrics(trainer, pl_module)
            metrics.pop("v_num")
            metrics = " ".join([f"{k}:{v}" for k, v in metrics.items()])
            line = (
                f"Local Epoch: {trainer.current_epoch} "
                f"Batch: [{self.train_batch_idx}/{self.total_train_batches}] "
                f"Metrics: {metrics}\r"
            )

            if self._logs_queue.full():
                self._logs_queue.get()
            self._logs_queue.put(line)
            self.work.logs = "\n".join(self._logs_queue.queue)


class PLAppArtifactsTracker(Callback):
    def __init__(self, work) -> None:
        super().__init__()
        self.work = work

    def setup(
        self,
        trainer: "pl.Trainer",
        pl_module: "pl.LightningModule",
        stage: Optional[str] = None,
    ) -> None:
        log_dir = self._get_logdir(trainer)
        self.work.log_dir = Path(log_dir) if log_dir is not None else None

    def on_train_start(
        self, trainer: "pl.Trainer", pl_module: "pl.LightningModule"
    ) -> None:
        pass
        # todo: figure out how to move the artifact over
        # if trainer.checkpoint_callback and trainer.checkpoint_callback.dirpath is not None:
        #     self.work.checkpoint_dir = Path(trainer.checkpoint_callback.dirpath)

    @staticmethod
    def _get_logdir(trainer: "pl.Trainer") -> str:
        """The code here is the same as in the ``Trainer.log_dir``, with the exception of the broadcast call."""
        if len(trainer.loggers) == 1:
            if isinstance(trainer.logger, TensorBoardLogger):
                dirpath = trainer.logger.log_dir
            else:
                dirpath = trainer.logger.save_dir
        else:
            dirpath = trainer.default_root_dir
        return dirpath
