import CONST from "../utils/Constants";
import axios from "axios";

export default axios.create({
  baseURL: CONST.BASE_URL_API,
  headers: {
    "Content-Type": "application/json",
  },
});