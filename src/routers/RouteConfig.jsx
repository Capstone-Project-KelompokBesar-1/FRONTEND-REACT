import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/LandingPage/Login/Login";
import AnggotaPage from "../pages/DashboardPage/AnggotaPage/AnggotaPage";
import BookingPage from "../pages/DashboardPage/BookingPage/BookingPage";
import DashboardMainPage from "../pages/DashboardPage/MainPage/MainPage";
import KelasPage from "../pages/DashboardPage/KelasPage/KelasPage";
import PelatihPage from "../pages/DashboardPage/PelatihPage/PelatihPage";
import LandingPage from "../pages/LandingPage/LandingPage";
import EditPelatihPage from "../pages/DashboardPage/PelatihPage/EditPelatihPage";
import EditAnggotaPage from "../pages/DashboardPage/AnggotaPage/EditAnggotaPage";
import EditKelasPage from "../pages/DashboardPage/KelasPage/EditKelasPage";
import EditBookingPage from "../pages/DashboardPage/BookingPage/EditBookingPage";
import ProtectedRoute from "./ProtectedRoute";
import PrivateRoute from "./PrivateRoute";
import CreateAnggotaPage from "../pages/DashboardPage/AnggotaPage/CreateAnggotaPage";
import CreateKelasPage from "../pages/DashboardPage/KelasPage/CreateKelasPage";
import CreateBookingPage from "../pages/DashboardPage/BookingPage/CreateBookingPage";

const RouteConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Route */}
        <Route exact path="/" element={<LandingPage />} />

        {/* Login Route */}
        <Route exact path="/" element={<ProtectedRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Admin Route */}
        <Route path="/" element={<PrivateRoute />}>
          <Route path="dashboard" element={<DashboardMainPage />} />
          <Route path="pelatih">
            <Route path="" element={<PelatihPage />} />
            <Route path="edit" element={<EditPelatihPage />} />
          </Route>
          <Route path="anggota">
            <Route path="" element={<AnggotaPage />} />
            <Route path="create" element={<CreateAnggotaPage />} />
            <Route path="edit" element={<EditAnggotaPage />} />
          </Route>
          <Route path="kelas">
            <Route path="" element={<KelasPage />} />
            <Route path="create" element={<CreateKelasPage />} />
            <Route path="edit" element={<EditKelasPage />} />
          </Route>
          <Route path="booking">
            <Route path="" element={<BookingPage />} />
            <Route path="create" element={<CreateBookingPage />} />
            <Route path="edit" element={<EditBookingPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteConfig;
