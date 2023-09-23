import axios from "axios";
const API = axios.create({
  baseURL: "http://34.72.156.245",
});

API.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.token) {
      config.headers.Authorization = `Token ${user.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default API;
