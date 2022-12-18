import React from "react";
import DashboardNavbar from "../../../components/Dashboard/DashboardNavbar/DashboardNavbar";
import Sidebar from "../../../components/Dashboard/DashboardNavbar/Sidebar";
import CreateKelas from "../../../components/Dashboard/Kelas/CreateKelas";

const CreateKelasPage = () => {
  return (
    <div>
      <DashboardNavbar />
      <Sidebar active="kelas" />
      <CreateKelas />
    </div>
  );
};

export default CreateKelasPage;
