import os
import subprocess
import sys
from pathlib import Path
from typing import Union

import requests
from lightning.components.python import PopenPythonScript


# todo: unsure if we can use the Tracer, as we need to capture the stdout
# todo: also tracing feels a bit hacky...
class CollaborativeLightningScript(PopenPythonScript):
    def __init__(self, script_path: Union[str, Path], **kwargs):
        super().__init__(script_path, **kwargs)
        self.logs = ""
        self._device = None
        self._collab_host = None
        self._collab_port = None
        self._server = None

    def run(
        self,
        server: bool,
        host: int,
        port: int,
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
        self.script_args += [f"--batch_size={batch_size}"]
        self._device = device
        self._collab_host = host
        self._collab_port = port
        self._server = server
        return super().run()

    def _run_with_subprocess_popen(self) -> None:
        cmd = [sys.executable] + [self.script_path] + self.script_args
        env = self.env if self.env is not None else os.environ.copy()
        if self._server:
            env["PL_ENDPOINT"] = str(1)
            env["PL_HOST"] = str(self._collab_host)
            env["PL_PORT"] = str(self._collab_port)
        else:
            env["PL_PEER_ENDPOINT"] = str(f"{self._collab_host}:{self._collab_port}")
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

    @staticmethod
    def create_peer_endpoint():
        request = requests.get("https://api.ipify.org")
        request.raise_for_status()

        address = request.text
        port = 9330  # todo: hardcoded for now
        return address, port
