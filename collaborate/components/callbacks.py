import logging
import math
import time
from queue import Queue
from typing import Optional

import hivemind
import pytorch_lightning as pl
import torch
from hivemind.optim.progress_tracker import GlobalTrainingProgress
from lightning.app.storage import Path
from pytorch_lightning import Callback
from pytorch_lightning.callbacks import ProgressBarBase
from pytorch_lightning.callbacks.progress.base import get_standard_metrics
from pytorch_lightning.loggers import TensorBoardLogger
from pytorch_lightning.strategies import CollaborativeStrategy

_log = logging.getLogger(__name__)


class CollaborativeProgressTracker(Callback):
    """This tracks the global state."""

    def __init__(self, work) -> None:
        super().__init__()
        self.work = work
        self.is_enabled = False
        self._trainer = None

        self.epoch = 0

    def on_train_batch_end(
        self, trainer, pl_module, outputs, batch, batch_idx: int
    ) -> None:
        self.work.progress_state = self.progress_state
        if self.work.peers is None:
            self.work.peers = self.peers
        pl_module.log(
            "num_peers", torch.tensor(trainer.strategy.num_peers), on_step=True
        )

    @property
    def peers(self):
        strategy: CollaborativeStrategy = self._trainer.strategy
        dht = strategy.dht
        global_ip = hivemind.utils.networking.choose_ip_address(
            dht.get_visible_maddrs()
        )
        visible_addresses = [
            str(a) for a in dht.get_visible_maddrs() if str(global_ip) in str(a)
        ]
        return visible_addresses

    @property
    def progress_state(self) -> dict:
        state = self.global_state
        try:
            s = time.gmtime(state.eta_next_epoch - time.time())
            s = time.strftime("%H:%M:%S", s)
        except:
            s = "-"
        return {
            "progress": int(
                (state.samples_accumulated / state.target_batch_size) * 100
            ),
            "epoch": state.epoch,
            "eta": s,
            "peers": state.num_peers,
        }

    @property
    def global_state(self) -> GlobalTrainingProgress:
        return self.hivemind_optimizer.tracker.global_progress

    @property
    def hivemind_optimizer(self) -> hivemind.Optimizer:
        return self._trainer.optimizers[0]

    def on_fit_start(
        self, trainer: "pl.Trainer", pl_module: "pl.LightningModule"
    ) -> None:
        self._trainer = trainer


class TrainMetrics(Callback):
    def __init__(self, work) -> None:
        super().__init__()
        self.work = work
        self._trainer = None
        self._current_epoch = -1
        self.accumulated_samples = 0
        self.epochs_contributed = 0

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
        self.accumulated_samples += self.hivemind_optimizer.batch_size_per_step
        if self.hivemind_optimizer.local_epoch != self._current_epoch:
            metrics = get_standard_metrics(trainer, pl_module)
            self.work.loss = metrics["loss"]
            if self._current_epoch >= 0:
                # report once an epoch has been contributed to.
                self.work.contribution = self.contribution
            self._current_epoch = self.hivemind_optimizer.local_epoch
            self.epochs_contributed += 1

    @property
    def hivemind_optimizer(self) -> hivemind.Optimizer:
        return self._trainer.optimizers[0]

    @property
    def contribution(self) -> int:
        return min(
            math.ceil(
                (
                    self.accumulated_samples
                    / (
                        self.hivemind_optimizer.target_batch_size
                        * self.epochs_contributed
                    )
                )
                * 100
            ),
            100,
        )


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
                f"Local Step: [{self.train_batch_idx}/{trainer.max_steps}] "
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
        if (
            trainer.checkpoint_callback
            and trainer.checkpoint_callback.dirpath is not None
        ):
            self.work.checkpoint_dir = Path(trainer.checkpoint_callback.dirpath)

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
