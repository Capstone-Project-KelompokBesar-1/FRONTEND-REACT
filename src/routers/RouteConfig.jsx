import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/LandingPage/Login/Login";
import AnggotaPage from "../pages/DashboardPage/AnggotaPage/AnggotaPage";
import BookingPage from "../pages/DashboardPage/BookingPage/BookingPage";
import DashboardMainPage from "../pages/DashboardPage/MainPage/MainPage";
import KelasPage from "../pages/DashboardPage/KelasPage/KelasPage";
import PelatihPage from "../pages/DashboardPage/PelatihPage/PelatihPage";
import LandingPage from "../pages/LandingPage/LandingPage";

const RouteConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard">
          <Route path="main" element={<DashboardMainPage />} />
          <Route path="pelatih" element={<PelatihPage />} />
          <Route path="anggota" element={<AnggotaPage />} />
          <Route path="kelas" element={<KelasPage />} />
          <Route path="booking" element={<BookingPage />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteConfig;