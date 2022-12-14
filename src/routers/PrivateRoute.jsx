import { Navigate, Outlet } from "react-router-dom";
import Auth from "../utils/Auth";

function PrivateRoute() {
  if (!Auth.isAuthorization()) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}

export default PrivateRoute;