import importlib
import operator
import platform
import subprocess
from typing import List
from xml.etree import ElementTree

from packaging.version import Version


class EnvironmentChecker:
    def __init__(
            self,
            debug: bool = False,
            minimum_bandwidth_gb: int = 2,
            min_cuda_memory_gb: int = 8,
    ):
        self.debug = debug
        self.minimum_bandwidth_gb = minimum_bandwidth_gb
        self.min_cuda_memory_gb = min_cuda_memory_gb

    def check_linux(self):
        return platform.system() == "Linux"

    def check_cuda_available(self):
        # todo: we assume the user has torch installed, this could not be the case
        # maybe be a torch check instead of CUDA check
        try:
            importlib.import_module("torch")
        except:
            return False
        import torch

        devices = 8
        if torch.cuda.is_available():
            devices = torch.cuda.device_count()
        return torch.cuda.is_available(), devices

    def sufficient_internet(self):
        return True

    def suitable_python_environment(self):
        return operator.ge(Version(platform.python_version()), Version("3.0.0"))

    def sufficient_memory(self):
        return not any(gpu <= self.min_cuda_memory_gb for gpu in self.cuda_memory())

    def bandwidth(self):
        return 1.5

    def cuda_memory(self) -> List[float]:
        if not self.check_cuda_available():
            return [0.]
        # does not work on Jetsons... (don't have nvidia-smi)
        try:
            res = subprocess.run(["nvidia-smi", "-q", "-x"], capture_output=True)
            if res.returncode != 0:
                return [0.]
        except FileNotFoundError:
            return [0.]
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
            if self.bandwidth() <= self.minimum_bandwidth_gb:
                if self.check_cuda_available():
                    warning += (
                        "\nTorch with CUDA is not available on this machine. "
                        "Make sure you install Torch with CUDA: https://pytorch.org/."
                    )
                elif not self.sufficient_memory():
                    warning += (
                        f"\nThere is less CUDA memory in some cards than recommended. "
                        f"Recommend minimum CUDA memory: {self.min_cuda_memory_gb}GiB"
                    )
                warning += (
                    "\nThe internet bandwidth is less than recommended. "
                    "You may see a lot of out of sync/timeout "
                    "errors as a result."
                )
        return warning

    def successful(self):
        if self.debug:
            return True
        return self.suitable_python_environment() and self.check_linux()
