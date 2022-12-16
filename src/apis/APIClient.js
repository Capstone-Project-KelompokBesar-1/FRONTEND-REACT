import axios from "axios";
import Cookies from "js-cookie";
import CONST from "../utils/Constants";

const token = Cookies.get("token");

export default axios.create({
  baseURL: CONST.BASE_URL_API,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
