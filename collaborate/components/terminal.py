import json


class CollaborativeTerminal:
    def get_user_config(self):
        print(
            "You've started the app in terminal mode. Please type your configuration."
        )
        self.invite_link = input(
            "Paste your invite link if you have any [default None]:"
        )
        if self.invite_link != "":
            config = json.loads(self.invite_link.split("config=")[-1])
            self.power_sgd = config["powerSGD"]
            self.optimize_memory = config["optimizeMemory"]
            self.optimize_communication = config["optimizeCommunication"]
            self.batch_size = config["batchSize"]
            print("set variables based on invite.")
        self.devices = input("How many local devices do you want to use? [default 1]")
        self.devices = 1 if self.devices == "" else int(self.devices)

        if self.invite_link == "":
            should_set_default = input(
                "Do you want to automatically set defaults "
                "(enable optimizations, global batch size of 32768)? [y/n, default y]"
            )
            should_set_default = should_set_default == "" or should_set_default == "y"
            if should_set_default:
                self.power_sgd, self.optimize_memory, self.optimize_communication = (
                    True,
                    True,
                    True,
                )
                self.batch_size = 32768
            else:
                self.power_sgd = input("Enable Power SGD? [y/n]") == "y"
                self.optimize_memory = input("Optimize memory usage? [y/n]") == "y"
                self.optimize_communication = (
                    input("Overlap communication? [y/n]") == "y"
                )
                self.batch_size = int(input("Batch Size? [integer number]"))
