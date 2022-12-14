import axios from "axios";
import CONST from "../utils/Constants";

const config = {
  baseURL: CONST.BASE_URL_API,
};

const axiosInstance = axios.create(config);

export default axiosInstance;
