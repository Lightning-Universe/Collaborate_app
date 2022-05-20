import multiprocessing as mp

from flask import Flask, render_template
from lightning.frontend import StaticWebFrontend


class ReactWebFrontend(StaticWebFrontend):
    """Serves the react build via Flask.

    Couldn't get `StaticWebFrontend` to work, this seems to do the job.
    """

    def start_server(self, host: str, port: int) -> None:
        self._process = mp.Process(
            target=start_server,
            kwargs=dict(
                host=host,
                port=port,
                serve_dir=self.serve_dir,
                path=f"/{self.flow.name}",
            ),
        )
        self._process.start()


def start_server(
    serve_dir: str, host: str = "localhost", port: int = -1, path: str = "/"
) -> None:
    app = Flask(
        __name__, static_folder=f"{serve_dir}/static", template_folder=f"{serve_dir}"
    )

    @app.route(path)
    def index():
        return render_template("index.html")

    app.debug = True
    app.run(host=host, port=port)
