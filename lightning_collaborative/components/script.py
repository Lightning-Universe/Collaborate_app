import asyncio
import multiprocessing
import os
import sys
from functools import partial
from pathlib import Path
from typing import List, Optional, Union

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
from lightning.app.components.python import TracerPythonScript
from lightning.app.utilities.tracer import Tracer
from pytorch_lightning.strategies import CollaborativeStrategy

from lightning_collaborative.components.callbacks import (
    CollaborativeProgressBar,
    CollaborativeProgressTracker,
    PLAppArtifactsTracker,
    TrainMetrics,
)
from lightning_collaborative.components.checkpoint import HiveMindCheckpoint
from lightning_collaborative.components.env_checker import EnvironmentChecker
from lightning_collaborative.components.scheduler import WarmupLearningRateScheduler


class CollaborativeLightningRunner(TracerPythonScript):
    def __init__(
        self, script_path: Union[str, Path], skip_environment_check: bool, **kwargs
    ):
        super().__init__(script_path, **kwargs)
        self._running_on_cloud = None
        self._device = None
        self.logs = ""
        self.skip_environment_check = skip_environment_check
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
        self.contribution = None
        self.peers = None
        self.host_maddrs = None
        self.checkpoint_dir = None

    def run(
        self,
        server: bool,
        peers: Optional[List[str]],
        power_sgd: bool,
        optimize_communication: bool,
        optimize_memory: bool,
        batch_size: int,
        device: int,
        root_flow_cuda_available: bool,
    ) -> None:
        # only set the device if we're running in local mode. On the cloud we assume all works have 1 GPU.
        self._running_on_cloud = (
            not root_flow_cuda_available and torch.cuda.is_available()
        )
        self._device = 0 if self._running_on_cloud else device

        self.run_environment_check()
        if self.success:
            self.training_started = True
            self.batch_size = batch_size
            self.optimize_communication = optimize_communication
            self.optimize_memory = optimize_memory
            self.power_sgd = power_sgd
            self.is_server = server
            if self.is_server:
                # use the first work that was spun up host as we assume that's the main node.
                self.host_maddrs = [
                    f"/ip4/0.0.0.0/tcp/{self.port}",
                    f"/ip4/0.0.0.0/udp/{self.port}/quic",
                ]
            self.peers = peers
            return super().run()

    @property
    def client_mode(self):
        if os.getenv("CLIENT_MODE"):
            return int(os.getenv("CLIENT_MODE")) == 1
        return self.peers is not None

    def configure_tracer(self) -> Tracer:
        def trainer_pre_fn(trainer, *args, **kwargs):
            # compresses values above threshold with 8bit Quantization, lower with Float16
            compression = SizeAdaptiveCompression(
                threshold=2**16 + 1,
                less=Float16Compression(),
                greater_equal=Uniform8BitQuantization(),
            )
            kwargs["precision"] = 16
            # todo shouldn't be hard-coded, some real YOLO numbers here
            max_steps = 10000000
            # max_steps * batch_size // global_batch_size
            actual_steps = int(max_steps * 2 // self.batch_size)
            print(f"Client mode: {self.client_mode}")
            kwargs["strategy"] = CollaborativeStrategy(
                averager_opts=dict(bandwidth=500.0),
                client_mode=self.client_mode,
                target_batch_size=self.batch_size,
                delay_state_averaging=self.optimize_communication,
                delay_optimizer_step=self.optimize_communication,
                offload_optimizer=self.optimize_communication,
                reuse_grad_buffers=self.optimize_memory,
                averaging_timeout=120,
                allreduce_timeout=120,
                matchmaking_time=30,
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
                load_state_compression=compression
                if self.optimize_memory
                else NoCompression(),
                verbose=True,
                initial_peers=self.peers,
                host_maddrs=self.host_maddrs,
                # todo: not a great idea to inject the scheduler here
                # but we have to for now.
                scheduler_fn=partial(
                    WarmupLearningRateScheduler,
                    num_warmup_steps=50,
                    num_training_steps=actual_steps,
                ),
                persistent=False,
            )
            kwargs["max_steps"] = max_steps
            kwargs["accelerator"] = "auto"
            kwargs["devices"] = 1
            kwargs["callbacks"] = kwargs.get("callbacks", []) + [
                CollaborativeProgressTracker(self),
                CollaborativeProgressBar(self),
                PLAppArtifactsTracker(self),
                TrainMetrics(self),
                HiveMindCheckpoint(),
            ]

            if self.cuda and not self._running_on_cloud:
                os.environ["CUDA_VISIBLE_DEVICES"] = str(self._device)
            return {}, args, kwargs

        tracer = super().configure_tracer()
        tracer.add_traced(pl.Trainer, "__init__", pre_fn=trainer_pre_fn)
        return tracer

    def run_environment_check(self):
        print("Starting environment check")
        setup = EnvironmentChecker(skip_environment_check=self.skip_environment_check)
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
        self.linux = setup.check_os()
        # todo: we should remove this check
        self.python = True
        self.discovered_devices = setup.check_cuda_devices_available()
        self.cuda = self.discovered_devices > 0
        if self.linux:
            self.internet = setup.sufficient_internet()
            self.memory = setup.sufficient_memory()
            self.current_memory = (
                "/".join([f"{gpu:.1f}" for gpu in setup.cuda_memory()]) + "GiB"
            )
            self.bandwidth = f"{setup.bandwidth() * 1024:.1f}" + "MBit/s"
        self.warning = setup.set_warning_message()
        self.success = setup.successful()
        print("Finished environment check")

    def retrieve_public_host(self):
        request = requests.get("https://api.ipify.org")
        request.raise_for_status()
        address = request.text
        return address

    def _run_tracer(self, init_globals):
        if self.cuda:
            return super()._run_tracer(init_globals)

        def run_trace():
            asyncio.set_event_loop(asyncio.new_event_loop())
            sys.argv = [self.script_path]
            tracer = self.configure_tracer()
            return tracer.trace(
                self.script_path, *self.script_args, init_globals=init_globals
            )

        process = multiprocessing.Process(target=run_trace)
        process.start()
