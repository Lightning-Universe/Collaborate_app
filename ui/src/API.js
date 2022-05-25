import axios from "axios";

const host = process.env.REACT_APP_API_URL ?? "http://127.0.0.1:7501";

class APIStateClient {

  constructor() {
    this.stateUrl = "/api/v1/state";
    this.client = axios.create({
      headers: {
        "X-Lightning-Session-UUID": "",
        "X-Lightning-Session-ID": "",
        "X-Lightning-Type": "DEFAULT",
      },
      baseURL: host,
    });
  }

  getState = async () => {
    const r = await this.client.get(this.stateUrl);
    return r.data;
  };

  setState(newState: any) {
    return this.client.post(this.stateUrl, { state: newState });
  }
}

const apiClient = new APIStateClient();
export default apiClient;
