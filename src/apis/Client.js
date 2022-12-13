import axios from "axios";

const URL = "http://ec2-54-65-17-32.ap-northeast-1.compute.amazonaws.com";

export default axios.create({
  baseURL: URL,
  headers: {
    "Content-type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaXNfYWRtaW4iOnRydWUsImVtYWlsIjoiYWRtaW5AbWFpbC5jb20iLCJleHAiOjE2NzA5NzcwMDV9.PUQ7M9RvFJwAu4z8q1KyNcOXubPL4HoPUne3cLXYhyw",
  },
});
