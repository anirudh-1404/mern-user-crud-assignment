import axios from "axios";
import toast from "react-hot-toast";

const API = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use(
  (config) => {
    console.log("request sent");
    console.log("URL", config.baseURL + config.url);
    console.log("Method", config.method?.toUpperCase());
    console.log("Data", config.data);

    return config;
  },
  (error) => {
    console.log("error while sending request", error.message);
    return Promise.reject(error);
  },
);

API.interceptors.response.use(
  (response) => {
    console.log("response recieved");
    console.log("status", response.status);
    console.log("data", response.data);

    return response;
  },
  (error) => {
    console.log("error while recieving response");

    if (error.response) {
      console.log("status", error.response.status);
      console.log("message", error.response.data.message || error.message);

      if (error.response.status === 400) {
        toast.error(error.response.data.message || "All feilds are required");
      }
      if (error.response.status === 404) {
        toast.error(error.response.data.message || "Not found");
      } else if (error.response.status === 500) {
        console.log("Internal server error!");
      } else {
        console.log("Network error", error.message);
      }
    }

    return Promise.reject(error);
  },
);

export default API;
