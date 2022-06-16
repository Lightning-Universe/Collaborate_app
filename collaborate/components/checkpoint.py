import os
from typing import Any

import hivemind
import pytorch_lightning as pl
from pytorch_lightning.callbacks import ModelCheckpoint
from pytorch_lightning.utilities.types import STEP_OUTPUT


class HiveMindCheckpoint(ModelCheckpoint):
    def on_train_batch_end(
        self,
        trainer: "pl.Trainer",
        pl_module: "pl.LightningModule",
        outputs: STEP_OUTPUT,
        batch: Any,
        batch_idx: int,
    ) -> None:
        hivemind_optimizer: hivemind.Optimizer = trainer.optimizers[0]
        super().on_train_batch_end(trainer, pl_module, outputs, batch, batch_idx)
        if not hasattr(self, "_current_epoch"):
            self._current_epoch = hivemind_optimizer.local_epoch
        if (
            hivemind_optimizer.local_epoch - self._current_epoch
        ) >= self.every_n_epochs:
            print(f"Saving checkpoint to: {self.filepath}")
            self._save_checkpoint(trainer, self.filepath)
            self._current_epoch = hivemind_optimizer.local_epoch

    @property
    def filepath(self):
        # todo: we probably want to save the last X hivemind epoch checkpoints as apposed to latest.
        ckpt_name = f"latest{self.FILE_EXTENSION}"
        return os.path.join(self.dirpath, ckpt_name) if self.dirpath else ckpt_name
