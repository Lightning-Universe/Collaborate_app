import pytorch_lightning as pl
from lightning_transformers.task.nlp.language_modeling import (
    LanguageModelingDataConfig,
    LanguageModelingDataModule,
    LanguageModelingTransformer,
)
from transformers import AutoTokenizer

if __name__ == "__main__":

    tokenizer = AutoTokenizer.from_pretrained(pretrained_model_name_or_path="gpt2")
    model = LanguageModelingTransformer(pretrained_model_name_or_path="gpt2")
    dm = LanguageModelingDataModule(
        cfg=LanguageModelingDataConfig(
            batch_size=2,
            dataset_name="wikitext",
            dataset_config_name="wikitext-2-raw-v1",
            streaming=True,
        ),
        tokenizer=tokenizer,
    )
    trainer = pl.Trainer(max_epochs=100)

    trainer.fit(model, dm)
