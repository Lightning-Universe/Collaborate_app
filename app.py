import json
import os
from typing import Optional

from lightning import CloudCompute, LightningApp, LightningFlow
from lightning.frontend import StaticWebFrontend
from lightning.storage import Path
from lightning.utilities.enum import WorkStageStatus

from lightning_collaborative.components.env_checker import EnvironmentChecker
from lightning_collaborative.components.script import CollaborativeLightningRunner
from lightning_collaborative.components.tensorboard import TensorBoard
from lightning_collaborative.components.terminal import CollaborativeTerminal


class TrainFlow(LightningFlow):
    def __init__(self, skip_environment_check: bool, terminal_mode: bool):
        super().__init__()
        self.skip_environment_check = skip_environment_check
        self.terminal_mode = terminal_mode
        self.invite_link = None
        self.share_link = None
        self.devices = None
        self.power_sgd = None
        self.optimize_memory = None
        self.optimize_communication = None
        self.batch_size = None
        self.start_setup = False
        self.flow_running = False
        self.discovered_devices = EnvironmentChecker.local_devices()
        self.local_devices_available = self.discovered_devices > 0
        self.logs = None
        self.start_multi_process = False
        self.initial_peers = None

    def _parse_invite_link(self):
        if self.invite_link:
            # example format of the link:
            # collaborative?ip4....,ip4...?optimize...
            self.initial_peers = self.invite_link.split("?")[1].split(",")

    def _set_share_link(self):
        if hasattr(self, "work_0") and self.work_0.peers is not None:
            config = dict(
                powerSGD=self.power_sgd,
                optimizeMemory=self.optimize_memory,
                optimizeCommunication=self.optimize_communication,
                batchSize=self.batch_size,
            )
            self.share_link = f"collaborative?{','.join(self.work_0.peers)}?config={json.dumps(config)}"
            print(
                f"Share this link with others to join your collaborative training session: {self.share_link}"
            )

    def run(self):
        if self.terminal_mode:
            self._run_terminal_mode()
            self.terminal_mode = False
        if self.train_work_logs:
            # todo: we only look at the logs from the first work
            self.logs = self.train_work_logs
        if self.start_setup:
            self._parse_invite_link()
            self._start_initial_train_work()
            self.start_multi_process = self.devices > 1
            self.start_setup = False
        if self.start_multi_process:
            if self.initial_peers is None and self.work_0.peers:
                # assign initial peers by the first work.
                self.initial_peers = self.work_0.peers
            if self.initial_peers:
                for device in range(1, self.devices):
                    self._start_work(device)
                self.start_multi_process = False
        if not self.share_link:
            self._set_share_link()
        self.flow_running = self._set_flow_running()

    def _set_flow_running(self):
        if not hasattr(self, "work_0"):
            return False
        if self.work_0.status.stage in (
            WorkStageStatus.RUNNING,
            WorkStageStatus.PENDING,
            WorkStageStatus.NOT_STARTED,
        ):
            return True
        return False

    def _run_terminal_mode(self):
        terminal = CollaborativeTerminal()
        terminal.get_user_config()
        self.invite_link = terminal.invite_link
        self.devices = terminal.devices
        self.power_sgd = terminal.power_sgd
        self.optimize_memory = terminal.optimize_memory
        self.optimize_communication = terminal.optimize_communication
        self.batch_size = terminal.batch_size
        self.start_setup = True

    @property
    def train_work_logs(self) -> Optional[str]:
        if hasattr(self, "work_0"):
            return self.work_0.logs

    def _start_initial_train_work(self):
        self._start_work(device=0)

    def _start_work(self, device):
        if not hasattr(self, f"work_{device}"):
            setattr(
                self,
                f"work_{device}",
                CollaborativeLightningRunner(
                    script_path="train.py",
                    cache_calls=False,
                    parallel=True,
                    skip_environment_check=self.skip_environment_check,
                    cloud_compute=CloudCompute(name="gpu", shm_size=4096),
                ),
            )
        getattr(self, f"work_{device}").run(
            root_flow_cuda_available=self.local_devices_available,
            device=device,
            server=(not self.invite_link) and (device == 0),
            peers=self.initial_peers,
            power_sgd=self.power_sgd,
            optimize_memory=self.optimize_memory,
            optimize_communication=self.optimize_communication,
            batch_size=self.batch_size,
        )


class ReactUI(LightningFlow):
    def configure_layout(self):
        return StaticWebFrontend(str(Path(__file__).parent / "ui/build"))


class RootFlow(LightningFlow):
    def __init__(self):
        super().__init__()
        skip_environment_check = os.environ.get("SKIP_ENV_CHECK", str(0)) == str(1)
        self.terminal_mode = os.environ.get("TERMINAL_MODE", str(0)) == str(1)
        if self.terminal_mode:
            print(
                "Started in terminal mode, give a few moments for the app to start up..."
            )
        self.react_ui = ReactUI()
        self.train_flow = TrainFlow(
            skip_environment_check=skip_environment_check,
            terminal_mode=self.terminal_mode,
        )

    def run(self):
        self.react_ui.run()
        self.train_flow.run()
        if self.train_flow.logs:
            # training has started, let's start the tensorboard logger
            if not getattr(self, "logger_component", None):
                logger_component = TensorBoard(log_dir=self.train_flow.work_0.log_dir)
                if logger_component is not None:
                    setattr(self, "logger_component", logger_component)
            else:
                self.logger_component.run()

    def configure_layout(self):
        if self.terminal_mode:
            return super().configure_layout()
        tabs = [{"name": "Train", "content": self.react_ui}]
        if hasattr(self, "logger_component"):
            tabs.extend(self.logger_component.configure_layout())
        return tabs


if __name__ == "__main__":
    app = LightningApp(root=RootFlow())
