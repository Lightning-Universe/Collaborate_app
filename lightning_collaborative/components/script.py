import os
import subprocess
import sys
from pathlib import Path
from typing import Optional, Union

from lightning.components.python import PopenPythonScript


# todo: unsure if we can use the Tracer, as we need to capture the stdout
# todo: also tracing feels a bit hacky...
class CollaborativeLightningScript(PopenPythonScript):
    def __init__(self, script_path: Union[str, Path], debug: bool, **kwargs):
        super().__init__(script_path, **kwargs)
        self.logs = ""
        self._device = None
        self.debug = debug
        self._peer_host = None
        self._peer_port = None
        self._server = None

    def run(
        self,
        server: bool,
        host: Optional[int],
        port: Optional[int],
        device: int,
        power_sgd: bool,
        overlap_communication: bool,
        optimize_memory: bool,
        batch_size: int,
    ) -> None:
        if overlap_communication:
            self.script_args += ["--overlap_communication"]
        if optimize_memory:
            self.script_args += ["--optimize_memory"]
        if power_sgd:
            self.script_args += ["--power_sgd"]
        self.script_args += [f"--batch_size={batch_size}"]
        self._device = device
        self._peer_host = host
        self._peer_port = port
        self._server = server
        return super().run()

    def _run_with_subprocess_popen(self) -> None:
        script_path = self.script_path if not self.debug else "dummy_train.py"
        cmd = [sys.executable] + [script_path] + self.script_args
        env = self.env if self.env is not None else os.environ.copy()
        if self._server:
            env["PL_ENDPOINT"] = str(1)
            env["PL_HOST"] = str(self.host)
            env["PL_PORT"] = str(self.port)
        else:
            env["PL_PEER_ENDPOINT"] = str(f"{self._peer_host}:{self._peer_port}")
        env["CUDA_VISIBLE_DEVICES"] = str(self._device)
        with subprocess.Popen(
            cmd,
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            bufsize=1,
            close_fds=True,
            env=env,
        ) as proc:
            self.pid = proc.pid
            if proc.stdout:
                with proc.stdout:
                    for line in iter(proc.stdout.readline, b""):
                        self.logs += "\n" + line.decode().rstrip()
            self.exit_code = proc.wait()
            if self.exit_code != 0:
                print(f"process exited with {self.exit_code}")
