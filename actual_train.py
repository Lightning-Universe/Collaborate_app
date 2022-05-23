# todo: we can use this script to build out a real train script for launch.

import time
from functools import partial
from typing import Any

import fire
import flash
import hivemind
from flash.core.data.utils import download_data
from flash.text import TextClassificationData, TextClassifier
from flash.text.classification.collate import TextClassificationCollate
from hivemind import (
    Float16Compression,
    SizeAdaptiveCompression,
    Uniform8BitQuantization,
)
from hivemind.optim.power_sgd_averager import PowerSGDGradientAverager
from pytorch_lightning import Callback
from pytorch_lightning.loggers import WandbLogger
from pytorch_lightning.strategies import CollaborativeStrategy
from transformers.modeling_outputs import SequenceClassifierOutputWithPast


class EpochTimes(Callback):
    def __init__(self):
        self.recorded_epoch = 0
        self.start = None

    def on_train_batch_end(
        self,
        trainer,
        pl_module,
        outputs,
        batch: Any,
        batch_idx: int,
        unused: int = 0,
    ) -> None:
        optimizer: hivemind.Optimizer = trainer.optimizers[0]
        if optimizer.local_epoch != self.recorded_epoch:
            end = time.time()
            total_time = end - self.start
            self.recorded_epoch = optimizer.local_epoch
            print(f"time local epoch: {total_time:.2f}s")
            pl_module.log("time local epoch", total_time, on_step=True)
            self.start = time.time()
        if not self.start:
            self.start = time.time()
        pl_module.log("peers", trainer.strategy.num_peers, on_step=True)


class TextClassificationCollateCustom(TextClassificationCollate):
    def __post_init__(self):
        super().__post_init__()
        self.tokenizer.pad_token = self.tokenizer.eos_token


class TextClassifierCustom(TextClassifier):
    def forward(self, batch):
        result = super().forward(batch)
        if isinstance(result, SequenceClassifierOutputWithPast):
            result = result.logits
        return result


def main(
    batch_size: int = 8192,
    max_epochs: int = 100,
    averaging_timeout: int = 300,
    allreduce_timeout: int = 300,
    *args,
    **kwargs,
):
    download_data("https://pl-flash-data.s3.amazonaws.com/imdb.zip", "./data/")

    datamodule = TextClassificationData.from_csv(
        "review",
        "sentiment",
        train_file="data/imdb/train.csv",
        val_file="data/imdb/valid.csv",
        batch_size=1,
    )

    model = TextClassifierCustom(
        backbone="gpt2", labels=datamodule.labels, learning_rate=1e-5, max_length=512
    )
    model.collate_fn = TextClassificationCollateCustom(
        backbone=model.hparams.backbone, max_length=model.hparams.max_length
    )
    # compresses values above threshold with 8bit Quantization, lower with Float16
    compression = SizeAdaptiveCompression(
        threshold=2**16 + 1,
        less=Float16Compression(),
        greater_equal=Uniform8BitQuantization(),
    )
    trainer = flash.Trainer(
        max_epochs=max_epochs,
        gpus=1,
        precision=16,
        strategy=CollaborativeStrategy(
            target_batch_size=batch_size,
            delay_state_averaging=True,
            delay_optimizer_step=True,
            offload_optimizer=True,
            reuse_grad_buffers=True,
            averaging_timeout=averaging_timeout,
            allreduce_timeout=allreduce_timeout,
            # Use PowerSGD to reduce communication overhead
            grad_averager_factory=partial(
                PowerSGDGradientAverager, averager_rank=32, min_compression_ratio=0.5
            ),
            grad_compression=compression,
            state_averaging_compression=compression,
            verbose=True,
        ),
        limit_val_batches=0,
        limit_test_batches=0,
        callbacks=EpochTimes(),
        log_every_n_steps=1,
        logger=WandbLogger(project="taming-collab"),
    )
    trainer.fit(model, datamodule=datamodule)


if __name__ == "__main__":
    fire.Fire(main)
