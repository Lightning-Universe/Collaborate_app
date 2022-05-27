import os
from typing import Optional

from lightning import CloudCompute, LightningApp, LightningFlow
from lightning.frontend import StaticWebFrontend
from lightning.storage import Path

from lightning_collaborative.components.env_checker import EnvironmentChecker
from lightning_collaborative.components.script import CollaborativeLightningRunner
from lightning_collaborative.components.tensorboard import TensorBoard

GLOBAL_RUN_LINK = "LIT"


class TrainFlow(LightningFlow):
    def __init__(self, debug: bool):
        super().__init__()
        self.debug = debug
        self.invite_link = None
        self.devices = None
        self.power_sgd = None
        self.optimize_memory = None
        self.optimize_communication = None
        self.batch_size = None
        self.start_setup = False
        self.discovered_devices = EnvironmentChecker.local_devices()
        self.logs = None

    def run(self):
        if self.train_work_logs:
            # todo: we only look at the logs from the first work
            self.logs = self.train_work_logs
        if self.start_setup:
            self._start_train_works()
            self.start_setup = False

    @property
    def train_work_logs(self) -> Optional[str]:
        if hasattr(self, "work_0"):
            return self.work_0.logs

    def _start_train_works(self):
        # dynamically create the works to run. We run one for reach process.
        for x in range(int(self.devices)):
            # this is current way of creating works dynamically.
            # we have to assign it to the module.
            if not hasattr(self, f"work_{x}"):
                setattr(
                    self,
                    f"work_{x}",
                    CollaborativeLightningRunner(
                        script_path="train.py",
                        run_once=False,
                        parallel=True,
                        debug=self.debug,
                        cloud_compute=CloudCompute(name="gpu"),
                    ),
                )
            getattr(self, f"work_{x}").run(
                device=x,
                server=not self.invite_link,
                invite_link=self.invite_link,
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
        debug = os.environ.get("DEBUG", str(0)) == str(1)
        self.react_ui = ReactUI()
        self.train_flow = TrainFlow(debug=debug)

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
        tabs = [{"name": "Train", "content": self.react_ui}]
        if hasattr(self, "logger_component"):
            tabs.extend(self.logger_component.configure_layout())
        return tabs


app = LightningApp(root=RootFlow())
