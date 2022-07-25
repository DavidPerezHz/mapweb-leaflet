import axios from "axios";

const apiConnection = axios.create({
  baseURL: "http://localhost:8888/api-test",
});

export default apiConnection;