import { Navigate, Outlet } from "react-router-dom";
import Auth from "../utils/Auth";

function ProtectedRoute() {
  if (Auth.isAuthorization()) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;