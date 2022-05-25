from functools import partial

import fire
import flash
from flash.core.data.utils import download_data
from flash.text import TextClassificationData, TextClassifier
from flash.text.classification.collate import TextClassificationCollate
from hivemind import (
    Float16Compression,
    NoCompression,
    SizeAdaptiveCompression,
    Uniform8BitQuantization,
)
from hivemind.optim.grad_averager import GradientAverager
from hivemind.optim.power_sgd_averager import PowerSGDGradientAverager
from pytorch_lightning.strategies import CollaborativeStrategy
from transformers.modeling_outputs import SequenceClassifierOutputWithPast


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
    power_sgd: bool = False,
    overlap_communication: bool = False,
    optimize_memory: bool = False,
    batch_size: int = 8192,
    max_epochs: int = 100,
    averaging_timeout: int = 300,
    allreduce_timeout: int = 300,
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
        accelerator="auto",
        devices=1,
        precision=16 if optimize_memory else 32,
        strategy=CollaborativeStrategy(
            target_batch_size=batch_size,
            # delay_state_averaging=overlap_communication,
            # delay_optimizer_step=overlap_communication,
            # offload_optimizer=overlap_communication,
            # reuse_grad_buffers=optimize_memory,
            averaging_timeout=averaging_timeout,
            allreduce_timeout=allreduce_timeout,
            # Use PowerSGD to reduce communication overhead
            grad_averager_factory=partial(
                PowerSGDGradientAverager, averager_rank=32, min_compression_ratio=0.5
            )
            if power_sgd
            else GradientAverager,
            grad_compression=compression if optimize_memory else NoCompression(),
            state_averaging_compression=compression
            if optimize_memory
            else NoCompression(),
            verbose=True,
        ),
        limit_val_batches=0,
        limit_test_batches=0,
        log_every_n_steps=1,
        enable_progress_bar=False,
    )
    trainer.fit(model, datamodule=datamodule)


if __name__ == "__main__":
    fire.Fire(main)
