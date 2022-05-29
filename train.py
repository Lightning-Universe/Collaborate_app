import os

import flash
import torch
from flash.core.data.utils import download_data
from flash.text import TextClassificationData, TextClassifier
from flash.text.classification.collate import TextClassificationCollate
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


if __name__ == "__main__":
    print("server", os.environ.get("PL_ENDPOINT"), flush=True)
    print("host", os.environ.get("PL_HOST"), flush=True)
    print("port", os.environ.get("PL_PORT"), flush=True)
    print("peer_endpoint", os.environ.get("PL_PEER_ENDPOINT"), flush=True)
    download_data("https://pl-flash-data.s3.amazonaws.com/imdb.zip", "./data/")

    print("TORCH CUDA", torch.cuda.is_available())

    datamodule = TextClassificationData.from_csv(
        "review",
        "sentiment",
        train_file="data/imdb/train.csv",
        val_file="data/imdb/valid.csv",
        batch_size=1,
    )

    model = TextClassifierCustom(
        backbone="sshleifer/tiny-gpt2",
        labels=datamodule.labels,
        learning_rate=1e-5,
        max_length=512,
    )
    model.collate_fn = TextClassificationCollateCustom(
        backbone=model.hparams.backbone, max_length=model.hparams.max_length
    )
    trainer = flash.Trainer(
        max_epochs=100,
        limit_val_batches=0,
        limit_test_batches=0,
        log_every_n_steps=1,
    )
    trainer.fit(model, datamodule=datamodule)
