import os
import signal
from pathlib import Path
from typing import Optional

from lightning import LightningApp, LightningFlow, LightningWork

from lightning_collaborative.components.env_checker import EnvironmentChecker
from lightning_collaborative.components.front_end import ReactWebFrontend
from lightning_collaborative.components.script import CollaborativeLightningScript


class CheckEnvironmentWork(LightningWork):
    def __init__(self, debug: bool = False):
        super().__init__(run_once=False)
        self.linux = None
        self.cuda = None
        self.internet = None
        self.bandwidth = None
        self.python = None
        self.memory = None
        self.devices = None
        self.current_memory = None
        self.warning = ""
        self.success = False
        self.complete = False
        self.debug = debug

    def run(self):
        setup = EnvironmentChecker(debug=self.debug)
        self.linux = setup.check_linux()
        self.cuda, self.devices = setup.check_cuda_available()
        self.internet = setup.sufficient_internet()
        self.python = setup.check_python_environment()
        self.memory = setup.check_memory()
        self.bandwidth = str(setup.bandwidth()) + "GB/s"
        self.current_memory = str(setup.cuda_memory()) + "GiB"
        self.warning = setup.set_warning_message()
        self.success = setup.successful()
        self.complete = True


class TrainFlow(LightningFlow):
    def __init__(self):
        super().__init__()
        self.invite_link = None
        self.devices = None
        self.mixed_precision = None
        self.power_sgd = None
        self.optimize_memory = None
        self.optimize_communication = None
        self.devices = None
        self.batch_size = None
        self.start_training = False
        self.stop_training = False
        self.logs = None

    @property
    def training(self) -> bool:
        return hasattr(self, "work_0")

    @property
    def train_work_logs(self) -> Optional[str]:
        if hasattr(self, "work_0"):
            return self.work_0.logs

    def _create_train_works(self):
        # dynamically create the works to run. We run one for reach process.
        for x in range(int(self.devices)):
            # this is current way of creating works dynamically.
            # we have to assign it to the module.
            setattr(
                self,
                f"work_{x}",
                CollaborativeLightningScript(
                    script_path="train.py", run_once=False, parallel=True
                ),
            )
            getattr(self, f"work_{x}").run(
                device=x,
                mixed_precision=self.mixed_precision,
                power_sgd=self.power_sgd,
                optimize_memory=self.optimize_memory,
                overlap_communication=self.optimize_communication,
                batch_size=self.batch_size,
            )

    def kill_train_works(self):
        for x in range(self.devices):
            os.kill(getattr(self, f"work_{x}").pid, signal.SIGTERM)
            delattr(self, f"work_{x}")

    def run(self):
        if self.train_work_logs:
            # todo: we only look at the logs from the first work
            self.logs = self.train_work_logs
        if self.start_training and not self.stop_training and not self.training:
            self._create_train_works()
            self.start_training = False
        if self.stop_training:
            self.start_training = False
            self.stop_training = False
            self.kill_train_works()


class SetupFlow(LightningFlow):
    def __init__(self):
        super().__init__()
        self.start = False
        # todo: debug will mean even if we don't fulfill requirements, we'll be allowed to train.
        self.environment_check = CheckEnvironmentWork(debug=True)

    def run(self):
        if self.start:
            self.environment_check.run()
            self.start = False


class ReactUI(LightningFlow):
    def configure_layout(self):
        return ReactWebFrontend(str(Path(__file__).parent / "ui/build"))


class RootFlow(LightningFlow):
    def __init__(self):
        super().__init__()
        self.port = 3000
        self.react_ui = ReactUI()
        self.setup_flow = SetupFlow()
        self.train_flow = TrainFlow()

    def run(self):
        self.react_ui.run()
        self.train_flow.run()
        self.setup_flow.run()

    def configure_layout(self):
        return [{"name": "train", "content": self.react_ui}]


app = LightningApp(root=RootFlow())
