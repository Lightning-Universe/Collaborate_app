import json
from functools import partial
from pathlib import Path
from typing import Optional, Union

import pytorch_lightning as pl
import requests
import torch
from hivemind import (
    Float16Compression,
    NoCompression,
    SizeAdaptiveCompression,
    Uniform8BitQuantization,
)
from hivemind.optim.grad_averager import GradientAverager
from hivemind.optim.power_sgd_averager import PowerSGDGradientAverager
from lightning.components.python import TracerPythonScript
from lightning.utilities.tracer import Tracer
from pytorch_lightning.strategies import CollaborativeStrategy

from lightning_collaborative.components.callbacks import (
    CollaborativeProgressBar,
    CollaborativeProgressTracker,
    PLAppArtifactsTracker,
    TrainMetrics,
)
from lightning_collaborative.components.env_checker import EnvironmentChecker


class CollaborativeLightningRunner(TracerPythonScript):
    def __init__(self, script_path: Union[str, Path], debug: bool, **kwargs):
        super().__init__(script_path, **kwargs)
        self._running_on_cloud = None
        self._device = None
        self.logs = ""
        self.debug = debug
        self.peer_host = None
        self.peer_port = None
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
        self.success = None
        self.training_started = False
        self.share_invite_link = None
        self.batch_size = None
        self.optimize_communication = None
        self.optimize_memory = None
        self.power_sgd = None
        self.is_server = None
        self.progress_state = None
        self.log_dir = None
        self.loss = None

    def run(
        self,
        server: bool,
        invite_link: Optional[str],
        power_sgd: bool,
        optimize_communication: bool,
        optimize_memory: bool,
        batch_size: int,
        device: int,
        root_flow_cuda_available: bool,
        work_0_host: Optional[str],
        work_0_port: Optional[int],
    ) -> None:
        # only set the device if we're running in local mode. On the cloud we assume all works have 1 GPU.
        self._running_on_cloud = (
            not root_flow_cuda_available and torch.cuda.is_available()
        )
        self._device = 0 if self._running_on_cloud else device

        self.run_environment_check()
        if self.success:
            self.training_started = True
            if self.debug:
                print("Swapping to dummy train file.")
                self.script_path = "dummy_train.py"

            self.batch_size = batch_size
            self.optimize_communication = optimize_communication
            self.optimize_memory = optimize_memory
            self.power_sgd = power_sgd
            self.is_server = server

            host, port = self.retrieve_public_host(), self.port
            if invite_link:
                # use the invite link host/port
                pieces = invite_link.split("?")
                [host, port] = [pieces[1], pieces[2]]
                host = host.replace("host=", "")
                port = int(port.replace("port=", ""))
            elif not server and work_0_host:
                # use the first work that was spun up host as we assume that's the main node.
                host, port = work_0_host, work_0_port

            self.share_invite_link = self._generate_link(
                host=host,
                port=port,
                power_sgd=power_sgd,
                optimize_memory=optimize_memory,
                optimize_communication=optimize_communication,
                batch_size=batch_size,
            )
            self.peer_host, self.peer_port = host, port
            print("SET THE PORTS", self.peer_host, self.peer_port)
            return super().run()

    def configure_tracer(self) -> Tracer:
        def trainer_pre_fn(trainer, *args, **kwargs):
            # compresses values above threshold with 8bit Quantization, lower with Float16
            compression = SizeAdaptiveCompression(
                threshold=2**16 + 1,
                less=Float16Compression(),
                greater_equal=Uniform8BitQuantization(),
            )
            if not self.debug:
                kwargs["precision"] = 16 if self.optimize_memory else 32

                kwargs["strategy"] = CollaborativeStrategy(
                    target_batch_size=self.batch_size,
                    delay_state_averaging=self.optimize_communication,
                    delay_optimizer_step=self.optimize_communication,
                    offload_optimizer=self.optimize_communication,
                    reuse_grad_buffers=self.optimize_memory,
                    # averaging_timeout=averaging_timeout,
                    # allreduce_timeout=allreduce_timeout,
                    # Use PowerSGD to reduce communication overhead
                    grad_averager_factory=partial(
                        PowerSGDGradientAverager,
                        averager_rank=32,
                        min_compression_ratio=0.5,
                    )
                    if self.power_sgd
                    else GradientAverager,
                    grad_compression=compression
                    if self.optimize_memory
                    else NoCompression(),
                    state_averaging_compression=compression
                    if self.optimize_memory
                    else NoCompression(),
                    verbose=True,
                    endpoint=self.is_server,
                    peer_endpoint=f"{self.peer_host}:{self.peer_port}"
                    if not self.is_server
                    else None,
                    host=self.host,
                    port=self.port,
                    retry_endpoint_sleep_duration=20,  # cloud might take longer to spin up works
                )
            kwargs["accelerator"] = "auto"
            kwargs["devices"] = [self._device] if not self.debug else 1
            kwargs["callbacks"] = kwargs.get("callbacks", []) + [
                CollaborativeProgressTracker(self, self.debug),
                CollaborativeProgressBar(self),
                PLAppArtifactsTracker(self),
                TrainMetrics(self, self.debug),
            ]
            return {}, args, kwargs

        tracer = super().configure_tracer()
        tracer.add_traced(pl.Trainer, "__init__", pre_fn=trainer_pre_fn)
        return tracer

    def run_environment_check(self):
        print("Starting environment check")
        setup = EnvironmentChecker(debug=self.debug)
        if self._running_on_cloud:
            print("Running on cloud, skipping environment check")
            self.success = True
            self.cuda = True
            self.memory = True
            self.linux = True
            self.python = True
            self.internet = True
            # todo: hard coded here
            self.bandwidth = f"{1024:.1f}" + "MBit/s"
            self.current_memory = (
                "/".join([f"{gpu:.1f}" for gpu in setup.cuda_memory()]) + "GiB"
            )
            print("Finished environment check")
            return
        self.linux = setup.check_linux()
        # todo: we should remove this check
        self.python = True
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

    def retrieve_public_host(self):
        request = requests.get("https://api.ipify.org")
        request.raise_for_status()
        address = request.text
        return address

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
