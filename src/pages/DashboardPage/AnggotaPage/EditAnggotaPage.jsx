import React from "react";
import DashboardNavbar from "../../../components/Dashboard/DashboardNavbar/DashboardNavbar";
import Sidebar from "../../../components/Dashboard/DashboardNavbar/Sidebar";
import EditAnggota from "../../../components/Dashboard/Anggota/EditAnggota";

const EditAnggotaPage = () => {
  return (
    <div>
      <DashboardNavbar />
      <Sidebar active="anggota" />
      <EditAnggota />
    </div>
  );
};

export default EditAnggotaPage;
