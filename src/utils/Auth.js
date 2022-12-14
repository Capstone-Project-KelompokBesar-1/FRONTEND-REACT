import Cookies from "js-cookie";

const Auth = {
  isAuthorization() {
    if (Cookies.get("token") || Cookies.get("refresh_token")) return true;
    return null;
  },
  getAccessToken() {
    return Cookies.get("token");
  },
  getRefreshToken() {
    return Cookies.get("refresh_token");
  },
  signOut(navigate) {
    Cookies.remove("token");
    Cookies.remove("refresh_token");
    navigate("/login");
  },
  store(data) {
    if (!data.data.token || !data.data.refresh_token) return null;
    Cookies.set("token", data.data.token);
    Cookies.set("refresh_token", data.data.refresh_token);
    return data;
  },
};

export default Auth;
