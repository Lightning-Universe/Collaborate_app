import torch


class WarmupLearningRateScheduler(torch.optim.lr_scheduler.LambdaLR):
    def __init__(self, optimizer, num_warmup_steps, num_training_steps):
        self.num_warmup_steps, self.num_training_steps = (
            num_warmup_steps,
            num_training_steps,
        )
        self._base_lr = self._prev_lr = optimizer.param_groups[0]["lr"]
        super().__init__(optimizer, self._linear_decay_with_warmup)

    def _linear_decay_with_warmup(self, current_step: int):
        if current_step < self.num_warmup_steps:
            new_learning_rate = float(current_step) / float(max(1, self.num_warmup_steps))
        else:
            new_learning_rate = max(
                0.0,
                float(self.num_training_steps - current_step)
                / float(max(1, self.num_training_steps - self.num_warmup_steps)),
            )
        return new_learning_rate
