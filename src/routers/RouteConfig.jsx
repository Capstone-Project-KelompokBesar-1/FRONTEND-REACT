import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import LandingPage from "../pages/LandingPage/LandingPage";

const RouteConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard">
          <Route path="main" element={<Dashboard />} />
          <Route path="pelatih" element={<Dashboard />} />
          <Route path="anggota" element={<Dashboard />} />
          <Route path="kelas" element={<Dashboard />} />
          <Route path="transaksi" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteConfig;