import importlib
import operator
import platform

from packaging.version import Version


class EnvironmentChecker:
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
        return torch.cuda.is_available()

    def sufficient_internet(self):
        return True

    def check_python_environment(self):
        return operator.ge(Version(platform.python_version()), Version('3.0.0'))

    def check_memory(self):
        return True

    def set_bandwidth(self):
        return "1.5GB/s"

    def set_cuda_memory(self):
        return "16GiB"
