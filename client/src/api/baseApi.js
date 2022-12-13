import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:7037/api/',
});

instance.interceptors.request.use(
  async (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  } 
);

export default instance;