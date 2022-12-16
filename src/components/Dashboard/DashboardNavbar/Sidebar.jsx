import { Link } from "react-router-dom";
import {
  MenuAnggotaIcon,
  MenuDashboardIcon,
  MenuKelasIcon,
  MenuPelatihIcon,
  MenuTroliIcon,
} from "../../../assets/icons";

const Sidebar = () => {
  return (
    <>
      <div className="w-64 h-[833px] absolute darkbg"></div>
      <div className="sidebar darkbg w-64 h-[833px] fixed z-10 mt-[100px]">
        <div className="menu-container flex flex-col justify-center p-5">
          <Link to="/dashboard" className="w-52 h-11 bg-primary-500 flex justify-start items-center rounded-lg mb-8">
            <MenuDashboardIcon className="w-6 ml-3" />
            <h3 className="font-avenirBlack text-white ml-4">DASHBOARD</h3>
          </Link>
          <Link to="/pelatih/page" className="w-52 h-11 flex justify-start items-center rounded-lg mb-8">
            <MenuPelatihIcon className="w-6 ml-3" />
            <h3 className="font-avenirBlack text-white ml-4">PELATIH</h3>
          </Link>
          <Link to="/anggota/page" className="w-52 h-11 flex justify-start items-center rounded-lg mb-8">
            <MenuKelasIcon className="w-6 ml-3" />
            <h3 className="font-avenirBlack text-white ml-4">ANGGOTA</h3>
          </Link>
          <Link to="/kelas/page" className="w-52 h-11 flex justify-start items-center rounded-lg mb-8">
            <MenuAnggotaIcon className="w-6 ml-3" />
            <h3 className="font-avenirBlack text-white ml-4">KELAS</h3>
          </Link>
          <Link to="/booking/page" className="w-52 h-11 flex justify-start items-center rounded-lg mb-8">
            <MenuTroliIcon className="w-6 ml-3" />
            <h3 className="font-avenirBlack text-white ml-4">TRANSAKSI</h3>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
