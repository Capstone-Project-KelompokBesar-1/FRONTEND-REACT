import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import ProtectedRoute from "./ProtectedRoute";

const RouteConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="dashboard" element>
          </Route>
        </Route>

        <Route path="/" element={<ProtectedRoute />}>
          <Route path="login" element />
          <Route path="register" element />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteConfig;