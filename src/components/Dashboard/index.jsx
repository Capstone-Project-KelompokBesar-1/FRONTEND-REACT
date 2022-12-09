import Anggota from "./Anggota";
import DashboardNavbar from "./DashboardNavbar";
import MainMenu from "./MainMenu";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <>
      <DashboardNavbar />
      <Sidebar />
      <Anggota />
    </>
  );
};

export default Dashboard;
