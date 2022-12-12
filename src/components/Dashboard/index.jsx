import Anggota from "./Anggota";
import EditAnggota from "./Anggota/EditAnggota";
import DashboardNavbar from "./DashboardNavbar";
import MainMenu from "./MainMenu";
import Pelatih from "./Pelatih";
import EditPelatih from "./Pelatih/EditPelatih";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <>
      <DashboardNavbar />
      <Sidebar />
      {/* <Pelatih /> */}
      {/* <EditAnggota /> */}
      <EditPelatih />
      {/* <MainMenu /> */}
    </>
  );
};

export default Dashboard;
