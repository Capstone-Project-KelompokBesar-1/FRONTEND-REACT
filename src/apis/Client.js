import axios from "axios";

const URL = "http://ec2-54-65-17-32.ap-northeast-1.compute.amazonaws.com";

export default axios.create({
  baseURL: URL,
  headers: {
    "Content-type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaXNfYWRtaW4iOnRydWUsImVtYWlsIjoiYWRtaW5AbWFpbC5jb20iLCJleHAiOjE2NzEwMjkyMDV9.59Exbxu2WC1FazcD1Y3J_0V7UUZIWmiwTDTJZgGQ1_E",
  },
});
