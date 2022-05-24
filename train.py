import os
import random
import time

import fire
import torch
from pytorch_lightning import LightningModule, Trainer
from pytorch_lightning.callbacks import ProgressBarBase
from torch.utils.data import DataLoader, Dataset


class RandomDataset(Dataset):
    def __init__(self, size, length):
        self.len = length
        self.data = torch.randn(length, size)

    def __getitem__(self, index):
        return self.data[index]

    def __len__(self):
        return self.len


class BoringModel(LightningModule):
    def __init__(self):
        super().__init__()
        self.layer = torch.nn.Linear(32, 2)

    def forward(self, x):
        return self.layer(x)

    def training_step(self, batch, batch_idx):
        loss = self(batch).sum()
        if self.should_log(batch_idx):
            self.log("train_loss", loss)
        time.sleep(1)
        self.log("num_peers", random.randint(1, 5))
        return loss

    def validation_step(self, batch, batch_idx):
        loss = self(batch).sum()
        if self.should_log(batch_idx):
            self.log("valid_loss", loss)

    def test_step(self, batch, batch_idx):
        loss = self(batch).sum()
        if self.should_log(batch_idx):
            self.log("test_loss", loss)

    def configure_optimizers(self):
        return torch.optim.SGD(self.layer.parameters(), lr=0.1)

    def should_log(self, batch_idx):
        return batch_idx % 32 == 0


class ProgressBar(ProgressBarBase):
    def __init__(self):
        super().__init__()
        self._enabled = True

    def disable(self):
        self._enabled = False

    def enable(self) -> None:
        self._enabled = True

    def on_train_batch_end(self, trainer, pl_module, outputs, batch, batch_idx) -> None:
        if self._enabled:
            metrics = self.get_metrics(trainer, pl_module)
            metrics.pop("v_num")
            metrics = " ".join([f"{k}:{v}" for k, v in metrics.items()])
            print(
                f"Epoch: {trainer.current_epoch} "
                f"Batch: [{self.train_batch_idx}/{self.total_train_batches}]  "
                f"Metrics: {metrics}\r",
                flush=True,
            )


def main(*args, **kwargs):
    print(args, kwargs, flush=True)
    print("device", os.environ["CUDA_VISIBLE_DEVICES"], flush=True)
    print("server", os.environ.get("PL_ENDPOINT"), flush=True)
    print("host", os.environ.get("PL_HOST"), flush=True)
    print("port", os.environ.get("PL_PORT"), flush=True)
    print("peer_endpoint", os.environ.get("PL_PEER_ENDPOINT"), flush=True)

    train_data = DataLoader(RandomDataset(32, 64), batch_size=2)
    val_data = DataLoader(RandomDataset(32, 64), batch_size=2)
    test_data = DataLoader(RandomDataset(32, 64), batch_size=2)

    model = BoringModel()
    trainer = Trainer(
        default_root_dir=os.getcwd(),
        max_epochs=10,
        log_every_n_steps=1,
        enable_model_summary=False,
        callbacks=ProgressBar(),
    )
    trainer.fit(model, train_dataloaders=train_data, val_dataloaders=val_data)
    trainer.test(model, dataloaders=test_data)


if __name__ == "__main__":
    fire.Fire(main)
