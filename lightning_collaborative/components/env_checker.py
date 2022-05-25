import importlib
import platform
import subprocess
from typing import List
from xml.etree import ElementTree


class EnvironmentChecker:
    def __init__(
        self,
        debug: bool = False,
        minimum_bandwidth_gb: int = 0,
        min_cuda_memory_gb: int = 8,
    ):
        self.debug = debug
        self.minimum_bandwidth_gb = minimum_bandwidth_gb
        self.min_cuda_memory_gb = min_cuda_memory_gb
        self._bandwidth_cache = None

    def check_linux(self):
        return platform.system() == "Linux"

    def _check_package_installed(self, package):
        try:
            importlib.import_module(package)
        except:  # noqa: E722
            return False
        return True

    def check_cuda_devices_available(self):
        # todo: we assume the user has torch installed, this could not be the case
        # maybe be a torch check instead of CUDA check
        if self.debug:
            return 8
        if not self._check_package_installed("torch"):
            return 0
        import torch

        if not torch.cuda.is_available():
            return 0

        return torch.cuda.device_count()

    def sufficient_internet(self):
        return True

    def _check_pip_installed(self):
        try:
            importlib.import_module("pip")
        except:  # noqa: E722
            return False

    def setup_python_environment(self):
        # todo: we can get rid of this probably
        return True

    def sufficient_memory(self):
        return not any(gpu <= self.min_cuda_memory_gb for gpu in self.cuda_memory())

    def bandwidth(self):
        if self.debug:
            return 1
        if self._bandwidth_cache is not None:
            return self._bandwidth_cache

        import speedtest

        s = (
            speedtest.Speedtest()
        )  # using a config makes the test faster (seems to take forever now) but reports way too low bandwidth
        s.get_servers([])
        s.get_best_server()
        s.download()
        s.upload()
        s.results.share()
        d = s.results.dict()
        upload = d["upload"] / 1024 / 1024 / 1024  # GBit / s
        download = d["download"] / 1024 / 1024 / 1024
        res = min(upload, download)
        self._bandwidth_cache = res
        return res

    def cuda_memory(self) -> List[float]:
        if not self.check_cuda_devices_available():
            return [0.0]
        # does not work on Jetsons... (don't have nvidia-smi)
        try:
            res = subprocess.run(["nvidia-smi", "-q", "-x"], capture_output=True)
            if res.returncode != 0:
                return [0.0]
        except FileNotFoundError:
            return [0.0]
        nvidia_smi_log = ElementTree.fromstring(res.stdout)
        gpus = []
        for gpu in nvidia_smi_log.findall("gpu"):
            fb_memory_usage = gpu.find("fb_memory_usage")
            # total used free
            free = fb_memory_usage.find("free").text
            # convert to gigabytes, only MiB seen in the wild...
            if free.endswith(" MiB"):
                free = float(free.rstrip(" MiB")) / 1024
            elif free.endswith(" KiB"):
                free = float(free.rstrip(" KiB")) / 1024 / 1024
            elif free.endswith(" GiB"):
                free = float(free.rstrip(" KiB"))
            else:
                raise RuntimeError("unexpected units")
            gpus.append(free)
        return gpus

    def set_warning_message(self):
        warning = ""
        if not self.successful():
            warning += "Your machine does not support the minimal requirements (Requires Linux and Python 3)."
        if self.successful():
            if not self.check_cuda_devices_available():
                warning += (
                    "\nTorch with CUDA is not available on this machine or cannot see any devices. "
                    "Make sure you install Torch with CUDA: https://pytorch.org/."
                )
            elif not self.sufficient_memory():
                warning += (
                    f"\nThere is less CUDA memory in some cards than recommended. "
                    f"Recommend minimum CUDA memory: {self.min_cuda_memory_gb}GiB"
                )
            if self.bandwidth() <= self.minimum_bandwidth_gb:
                warning += (
                    "\nThe internet bandwidth is less than recommended. "
                    "You may see a lot of out of sync/timeout "
                    "errors as a result."
                )
        return warning

    def successful(self):
        if self.debug:
            return True
        return self.setup_python_environment() and self.check_linux()
