import os
import signal
import subprocess

from lightning import LightningWork
from lightning.utilities.app_helpers import _collect_child_process_pids


class TensorboardWork(LightningWork):
    def __init__(self, host:str, port: int):
        super().__init__(parallel=True)
        self.tb_host = host
        self.tb_port = port
        self.pid = None

    def run(self):
        os.makedirs("./lightning_logs", exist_ok=True)
        proc = subprocess.Popen(
            ["tensorboard", "--logdir", "./lightning_logs", "--host", f"{self.tb_host}", "--port", f"{self.tb_port}"]
        )
        self.pid = proc.pid
        proc.wait()

    def on_exit(self):
        for child_pid in _collect_child_process_pids(os.getpid()):
            os.kill(child_pid, signal.SIGTERM)
