import importlib
import operator
import platform

from packaging.version import Version


class EnvironmentChecker:
    def __init__(self, debug: bool = False, minimum_bandwidth_gb: int = 2, min_cuda_memory_gb: int = 8):
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
        return torch.cuda.is_available()

    def sufficient_internet(self):
        return True

    def check_python_environment(self):
        return operator.ge(Version(platform.python_version()), Version('3.0.0'))

    def check_memory(self):
        return True

    def bandwidth(self):
        return 1.5

    def cuda_memory(self):
        return 4

    def set_warning_message(self):
        warning = ""
        if not self.successful():
            warning += 'Your machine does not support the minimal requirements (Requires Linux and Python 3).'
        if self.successful():
            if self.bandwidth() <= self.minimum_bandwidth_gb:
                warning += 'The internet bandwidth is less than recommended. ' \
                           'You may see a lot of out of sync/timeout ' \
                           'errors as a result.'
            if self.cuda_memory() <= self.min_cuda_memory_gb:
                warning += f'\nThere is less CUDA memory than recommended. ' \
                           f'Recommend minimum CUDA memory: {self.min_cuda_memory_gb}GiB'
        return warning

    def successful(self):
        if self.debug:
            return True
        return self.check_python_environment() and self.check_linux()
