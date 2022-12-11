import Anggota from "./Anggota";
import DashboardNavbar from "./DashboardNavbar";
import MainMenu from "./MainMenu";
import Pelatih from "./Pelatih";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <>
      <DashboardNavbar />
      <Sidebar />
      <Pelatih />
    </>
  );
};

export default Dashboard;
