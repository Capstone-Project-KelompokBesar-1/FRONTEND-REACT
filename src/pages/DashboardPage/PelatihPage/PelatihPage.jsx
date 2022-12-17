import React from "react";
import DashboardNavbar from "../../../components/Dashboard/DashboardNavbar/DashboardNavbar";
import Sidebar from "../../../components/Dashboard/DashboardNavbar/Sidebar";
import Pelatih from "../../../components/Dashboard/Pelatih/Pelatih";

const PelatihPage = () => {
  return (
    <div>
      <DashboardNavbar />
      <Sidebar active="pelatih" />
      <Pelatih />
    </div>
  );
};

export default PelatihPage;
