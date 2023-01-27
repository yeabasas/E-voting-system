import axios from "axios";
import { TIMEOUT, SERVER_URL } from "./constants";

const API = axios.create({
  baseURL: SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: TIMEOUT,
});

API.interceptors.request.use(
  (config) => {
    const result = localStorage.getItem("office_token");
    if (result) {
      config.headers.Authorization = `Bearer ${JSON.parse(result).accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default API;
