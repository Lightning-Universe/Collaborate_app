import json
import os
import subprocess
import sys
from pathlib import Path
from typing import Optional, Union

import requests
from lightning.components.python import PopenPythonScript

# todo: unsure if we can use the Tracer, as we need to capture the stdout
# todo: also tracing feels a bit hacky...
from lightning_collaborative.components.env_checker import EnvironmentChecker


class CollaborativeLightningWork(PopenPythonScript):
    def __init__(self, script_path: Union[str, Path], debug: bool, **kwargs):
        super().__init__(script_path, **kwargs)
        self.logs = ""
        self._device = None
        self.debug = debug
        self._peer_host = None
        self._peer_port = None
        self._server = None
        self.linux = None
        self.cuda = None
        self.internet = None
        self.bandwidth = None
        self.python = None
        self.memory = None
        self.discovered_devices = None
        self.current_memory = None
        self.warning = ""
        self.success = False
        self.training_started = False
        self.share_invite_link = None

    def run(
        self,
        server: bool,
        invite_link: Optional[str],
        device: int,
        power_sgd: bool,
        optimize_communication: bool,
        optimize_memory: bool,
        batch_size: int,
    ) -> None:
        print("Starting environment check")
        setup = EnvironmentChecker(debug=self.debug)
        self.linux = setup.check_linux()

        # skip requirements install if in debug mode
        if self.debug:
            self.python = True
        else:
            self.python = setup.setup_python_environment()
        self.discovered_devices = setup.check_cuda_devices_available()
        self.cuda = self.discovered_devices > 0
        self.internet = setup.sufficient_internet()
        self.memory = setup.sufficient_memory()
        self.bandwidth = f"{setup.bandwidth() * 1024:.1f}" + "MBit/s"
        self.current_memory = (
            "/".join([f"{gpu:.1f}" for gpu in setup.cuda_memory()]) + "GiB"
        )
        self.warning = setup.set_warning_message()
        self.success = setup.successful()
        print("Finished environment check")
        if self.success:
            self.training_started = True
            print("Starting training")
            if optimize_communication:
                self.script_args += ["--optimize_communication"]
            if optimize_memory:
                self.script_args += ["--optimize_memory"]
            if power_sgd:
                self.script_args += ["--power_sgd"]
            self.script_args += [f"--batch_size={batch_size}"]
            self._device = device
            self._server = server

            host, port = self.public_host, self.port
            if invite_link:
                pieces = invite_link.split("?")
                [host, port] = [pieces[1], pieces[2]]
                host = host.replace("host=", "")
                port = int(port.replace("port=", ""))
            self.share_invite_link = self._generate_link(
                host=host,
                port=port,
                power_sgd=power_sgd,
                optimize_memory=optimize_memory,
                optimize_communication=optimize_communication,
                batch_size=batch_size,
            )
            self._peer_host, self._peer_port = host, port
            return super().run()

    @property
    def public_host(self):
        request = requests.get("https://api.ipify.org")
        request.raise_for_status()
        address = request.text
        return address

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

    def _generate_link(
        self, host, port, power_sgd, optimize_memory, optimize_communication, batch_size
    ):
        config = dict(
            powerSGD=power_sgd,
            optimizeMemory=optimize_memory,
            optimizeCommunication=optimize_communication,
            batchSize=batch_size,
        )
        return f"collaborative?host={host}?port={port}?config={json.dumps(config)}"
