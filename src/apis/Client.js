import axios from "axios";

export default axios.create({
  baseURL: "http://ec2-54-65-17-32.ap-northeast-1.compute.amazonaws.com",
  headers: {
    "Content-type": "application/json",
  },
});
