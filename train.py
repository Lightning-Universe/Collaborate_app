import time

import pytorch_lightning as pl
from lightning_transformers.task.nlp.language_modeling import (
    LanguageModelingDataConfig,
    LanguageModelingDataModule,
    LanguageModelingTransformer,
)
from transformers import AutoTokenizer

if __name__ == "__main__":

    class MyTransformer(LanguageModelingTransformer):
        def training_step(self, batch, batch_idx):
            time.sleep(0.5)
            return super().training_step(batch, batch_idx)

    tokenizer = AutoTokenizer.from_pretrained(
        pretrained_model_name_or_path="sshleifer/tiny-gpt2"
    )
    model = MyTransformer(pretrained_model_name_or_path="sshleifer/tiny-gpt2")
    dm = LanguageModelingDataModule(
        cfg=LanguageModelingDataConfig(
            batch_size=2,
            dataset_name="wikitext",
            dataset_config_name="wikitext-2-raw-v1",
        ),
        tokenizer=tokenizer,
    )
    trainer = pl.Trainer(max_epochs=100)

    trainer.fit(model, dm)
