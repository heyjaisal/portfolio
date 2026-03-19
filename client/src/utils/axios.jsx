import axios from "axios";

const baseURL = "http://localhost:5500";

const axiosInstance = axios.create({
  baseURL: `${baseURL}/api`,
 
});

export default axiosInstance;