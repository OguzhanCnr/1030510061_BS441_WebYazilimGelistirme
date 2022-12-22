import axios from "axios";
//Base apimiz
const instance = axios.create({
  baseURL: 'https://localhost:7037/api/',
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