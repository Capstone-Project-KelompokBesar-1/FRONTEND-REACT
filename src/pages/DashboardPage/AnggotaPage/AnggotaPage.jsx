import React from "react";
import DashboardNavbar from "../../../components/Dashboard/DashboardNavbar/DashboardNavbar";
import Sidebar from "../../../components/Dashboard/DashboardNavbar/Sidebar";
import Anggota from "../../../components/Dashboard/Anggota/Anggota";

const AnggotaPage = () => {
  return (
    <div>
      <DashboardNavbar />
      <Sidebar active="anggota" />
      <Anggota />
    </div>
  );
};

export default AnggotaPage;
