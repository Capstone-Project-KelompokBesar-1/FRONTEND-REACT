import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  MenuAnggotaIcon,
  MenuDashboardIcon,
  MenuKelasIcon,
  MenuPelatihIcon,
  MenuTroliIcon,
} from "../../../assets/icons";
import { setEdit } from "../../../redux/gymSlice";

const Sidebar = ({ active }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="w-64 h-[833px] absolute darkbg"></div>
      <div className="sidebar darkbg w-64 h-[833px] fixed z-10 mt-[100px]">
        <div className="menu-container flex flex-col justify-center p-5">
          <Link
            to="/dashboard"
            className={`w-52 h-11 flex justify-start items-center rounded-lg mb-8 ${
              active === "dashboard" ? "bg-primary-500" : ""
            }`}
          >
            <MenuDashboardIcon className="w-6 ml-3" />
            <h3 className="font-avenirBlack text-white ml-4">DASHBOARD</h3>
          </Link>
          <Link
            to="/pelatih"
            className={`w-52 h-11 flex justify-start items-center rounded-lg mb-8 ${
              active === "pelatih" ? "bg-primary-500" : ""
            }`}
          >
            <MenuPelatihIcon className="w-6 ml-3" />
            <h3 className="font-avenirBlack text-white ml-4">PELATIH</h3>
          </Link>
          <div onClick={() => dispatch(setEdit([]))}>
            <Link
              to="/anggota"
              className={`w-52 h-11 flex justify-start items-center rounded-lg mb-8 ${
                active === "anggota" ? "bg-primary-500" : ""
              }`}
            >
              <MenuKelasIcon className="w-6 ml-3" />
              <h3 className="font-avenirBlack text-white ml-4">ANGGOTA</h3>
            </Link>
          </div>

          <div onClick={() => dispatch(setEdit([]))}>
            <Link
              to="/kelas"
              className={`w-52 h-11 flex justify-start items-center rounded-lg mb-8 ${
                active === "kelas" ? "bg-primary-500" : ""
              }`}
            >
              <MenuAnggotaIcon className="w-6 ml-3" />
              <h3 className="font-avenirBlack text-white ml-4">KELAS</h3>
            </Link>
          </div>

          <div onClick={() => dispatch(setEdit([]))}>
            <Link
              to="/booking"
              className={`w-52 h-11 flex justify-start items-center rounded-lg mb-8 ${
                active === "booking" ? "bg-primary-500" : ""
              }`}
            >
              <MenuTroliIcon className="w-6 ml-3" />
              <h3 className="font-avenirBlack text-white ml-4">TRANSAKSI</h3>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
