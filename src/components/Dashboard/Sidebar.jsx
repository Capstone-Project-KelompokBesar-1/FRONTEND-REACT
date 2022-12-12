import {
  menuAdminIcon,
  menuAnggotaIcon,
  menuDashboardIcon,
  menuKelasIcon,
  menuPelatihIcon,
} from "../../assets/icons";

const Sidebar = () => {
  return (
    <div className="sidebar darkbg w-64 h-[833px] fixed">
      <div className="menu-container flex flex-col justify-center p-5">
        <div className="w-52 h-11 bg-primary-500 flex justify-start items-center rounded-lg mb-8">
          <img src={menuDashboardIcon} alt="Home Icon" className="w-6 ml-3" />
          <h3 className="font-avenirBlack text-white ml-4">DASHBOARD</h3>
        </div>
        <div className="w-52 h-11 flex justify-start items-center rounded-lg mb-8">
          <img src={menuAdminIcon} alt="Home Icon" className="w-6 ml-3" />
          <h3 className="font-avenirBlack text-white ml-4">ADMIN</h3>
        </div>
        <div className="w-52 h-11 flex justify-start items-center rounded-lg mb-8">
          <img src={menuPelatihIcon} alt="Home Icon" className="w-6 ml-3" />
          <h3 className="font-avenirBlack text-white ml-4">PELATIH</h3>
        </div>
        <div className="w-52 h-11 flex justify-start items-center rounded-lg mb-8">
          <img src={menuAnggotaIcon} alt="Home Icon" className="w-6 ml-3" />
          <h3 className="font-avenirBlack text-white ml-4">KELAS</h3>
        </div>
        <div className="w-52 h-11 flex justify-start items-center rounded-lg mb-8">
          <img src={menuKelasIcon} alt="Home Icon" className="w-6 ml-3" />
          <h3 className="font-avenirBlack text-white ml-4">ANGGOTA</h3>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;