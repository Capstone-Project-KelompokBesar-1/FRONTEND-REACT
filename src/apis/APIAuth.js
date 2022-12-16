import axiosInstance from "../configs/axiosInstance";
import Auth from "../utils/Auth";

const APIAuth = {
  async signin(payload) {
    try {
      const { email, password } = payload;
      const response = await axiosInstance.post("/login", {
        email,
        password,
      });
      Auth.store(response.data);
      console.log("response", response.data);
      return response;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },
};

export default APIAuth;
