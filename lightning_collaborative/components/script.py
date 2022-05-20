import subprocess
import sys
from pathlib import Path
from typing import Union

from lightning.components.python import PopenPythonScript


# todo: unsure if we can use the Tracer, as we need to capture the stdout
# todo: also tracing feels a bit hacky...
class CollaborativeLightningScript(PopenPythonScript):
    def __init__(self, script_path: Union[str, Path], **kwargs):
        super().__init__(script_path, **kwargs)
        self.logs = ""

    def run(
        self,
        device: int,
        mixed_precision: bool,
        power_sgd: bool,
        overlap_communication: bool,
        optimize_memory: bool,
        batch_size: int,
    ) -> None:
        if mixed_precision:
            self.script_args += ["--mixed_precision"]
        if overlap_communication:
            self.script_args += ["--overlap_communication"]
        if optimize_memory:
            self.script_args += ["--optimize_memory"]
        self.script_args += [f"--batch_size={batch_size}", f"--device={device}"]
        return super().run()

    def _run_with_subprocess_popen(self) -> None:
        cmd = [sys.executable] + [self.script_path] + self.script_args
        with subprocess.Popen(
            cmd,
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            bufsize=1,
            close_fds=True,
            env=self.env,
        ) as proc:
            self.pid = proc.pid
            if proc.stdout:
                with proc.stdout:
                    for line in iter(proc.stdout.readline, b""):
                        self.logs += "\n" + line.decode().rstrip()
            self.exit_code = proc.wait()
            if self.exit_code != 0:
                print(f"process exited with {self.exit_code}")
