import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import {
  LoncengIcon,
  SuperAdminIcon,
  AngleDownIcon,
} from "../../../assets/icons";

const DashboardNavbar = () => {
  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("refresh_token");
    window.location.reload();
  };
  return (
    <nav className="fixed darkbg flex items-center justify-between h-[100px] w-full z-20">
      <Link to="/" className="font-avenirBlack text-primary-500 text-[32px] ml-14">
        OurGym
      </Link>
      <div className="flex items-center pr-16">
        <i>
          <LoncengIcon className="w-9 mr-3" />
        </i>
        <button onClick={logout}>
          <i>
            <SuperAdminIcon className="w-9 mr-3" />
          </i>
        </button>
        <i>
          <AngleDownIcon className="w-5" />
        </i>
      </div>
    </nav>
  );
};

export default DashboardNavbar;