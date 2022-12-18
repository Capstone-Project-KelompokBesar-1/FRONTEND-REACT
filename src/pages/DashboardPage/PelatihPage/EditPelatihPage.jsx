import React from "react";
import DashboardNavbar from "../../../components/Dashboard/DashboardNavbar/DashboardNavbar";
import Sidebar from "../../../components/Dashboard/DashboardNavbar/Sidebar";
import EditPelatih from "../../../components/Dashboard/Pelatih/EditPelatih";

const EditPelatihPage = () => {
  return (
    <div>
      <DashboardNavbar />
      <Sidebar active="pelatih" />
      <EditPelatih />
    </div>
  );
};

export default EditPelatihPage;
