import json
import os
import signal
from typing import Optional

from lightning import LightningApp, LightningFlow, LightningWork
from lightning.frontend import StaticWebFrontend
from lightning.storage import Path

from lightning_collaborative.components.env_checker import EnvironmentChecker
from lightning_collaborative.components.script import CollaborativeLightningScript
from lightning_collaborative.components.tensorboard import TensorBoard

GLOBAL_RUN_LINK = "LIT"


class CheckEnvironmentWork(LightningWork):
    def __init__(self, debug: bool = False):
        super().__init__()
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
        print("Starting environment check")
        setup = EnvironmentChecker(debug=self.debug)
        self.linux = setup.check_linux()

        # skip requirements install if in debug mode
        if self.debug:
            self.python = True
        else:
            self.python = setup.setup_python_environment()
        self.devices = setup.check_cuda_devices_available()
        self.cuda = self.devices > 0
        self.internet = setup.sufficient_internet()
        self.memory = setup.sufficient_memory()
        self.bandwidth = f"{setup.bandwidth()*1024:.1f}" + "MBit/s"
        self.current_memory = (
            "/".join([f"{gpu:.1f}" for gpu in setup.cuda_memory()]) + "GiB"
        )
        self.warning = setup.set_warning_message()
        self.success = setup.successful()
        self.complete = True
        print("Finished environment check")


class TrainFlow(LightningFlow):
    def __init__(self, debug: bool):
        super().__init__()
        self.debug = debug
        self.invite_link = None
        self.share_invite_link = None
        self.devices = None
        self.power_sgd = None
        self.optimize_memory = None
        self.optimize_communication = None
        self.wandb = None
        self.batch_size = None
        self.start_training = False
        self.stop_training = False
        self.running = False
        self.logs = None
        self.host = None
        self.port = None
        self.wandb_url = ""

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
                    CollaborativeLightningScript(
                        script_path="train.py",
                        run_once=False,
                        parallel=True,
                        debug=self.debug,
                    ),
                )
            getattr(self, f"work_{x}").run(
                device=x,
                server=not self.invite_link,
                host=self.host,
                port=self.port,
                power_sgd=self.power_sgd,
                optimize_memory=self.optimize_memory,
                overlap_communication=self.optimize_communication,
                batch_size=self.batch_size,
            )

    def kill_train_works(self):
        for x in range(self.devices):
            work = getattr(self, f"work_{x}")
            os.kill(work.pid, signal.SIGTERM)

    def run(self):
        if self.train_work_logs:
            # todo: we only look at the logs from the first work
            self.logs = self.train_work_logs
        if self.start_training and not self.stop_training:
            # todo: wandb global not supported yet
            # if self.invite_link == GLOBAL_RUN_LINK:
            #     self.wandb_url = ""
            self._select_host_port()
            self.share_invite_link = (
                self._generate_link() if not self.invite_link else self.invite_link
            )
            self._start_train_works()
            self.running = True
            self.start_training = False
        if self.stop_training:
            self.running = False
            self.start_training = False
            self.stop_training = False
            self.kill_train_works()

    def _select_host_port(self):
        if self.invite_link:
            pieces = self.invite_link.split("?")
            [host, port] = [pieces[1], pieces[2]]
            self.host = host.replace("host=", "")
            self.port = int(port.replace("port=", ""))

    def _generate_link(self):
        config = dict(
            powerSGD=self.power_sgd,
            optimizeMemory=self.optimize_memory,
            optimizeCommunication=self.optimize_communication,
            batchSize=self.batch_size,
        )
        return f"collaborative?host={self.host}?port={self.port}?config={json.dumps(config)}"


class SetupFlow(LightningFlow):
    def __init__(self, debug: bool):
        super().__init__()
        self.start = False
        # todo: debug will mean even if we don't fulfill requirements,
        #  we'll be allowed to train.
        self.environment_check = CheckEnvironmentWork(debug)

    def run(self):
        if self.start:
            # todo: this keeps getting called. start is always true even if set false.
            self.environment_check.run()
            self.start = False


class ReactUI(LightningFlow):
    def configure_layout(self):
        return StaticWebFrontend(str(Path(__file__).parent / "ui/build"))


class RootFlow(LightningFlow):
    def __init__(self):
        super().__init__()
        debug = os.environ.get("DEBUG", str(0)) == str(1)
        self.react_ui = ReactUI()
        self.setup_flow = SetupFlow(debug=debug)
        self.train_flow = TrainFlow(debug=debug)
        self.tensorboard_flow = TensorBoard(log_dir=Path("./lightning_logs"))

    def run(self):
        self.react_ui.run()
        self.tensorboard_flow.run()
        self.train_flow.run()
        self.setup_flow.run()

    def configure_layout(self):
        return [
            {"name": "Train", "content": self.react_ui},
            {"name": "Local Monitor", "content": self.tensorboard_flow},
            {"name": "Global Monitor", "content": self.train_flow.wandb_url},
        ]


app = LightningApp(root=RootFlow())
