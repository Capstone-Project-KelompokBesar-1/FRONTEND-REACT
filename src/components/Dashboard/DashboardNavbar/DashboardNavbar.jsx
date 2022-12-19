import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {
  SuperAdminIcon,
  AngleDownIcon,
} from "../../../assets/icons";
import 'animate.css';

const DashboardNavbar = () => {
  const logout = () => {
    Swal.fire({
      title: 'Super Admin',
      text: "SA1030",
      position: "top-right",
      backdrop: 'none',
      customClass: {
        popup: 'w-[353px] mt-[70px] mr-[50px] drop-shadow-2xl	rounded-[10px] px-[14px] py-[9px]',
        title: 'text-[24px] text-black font-avenirHeavy pt-[0px] mt-[0px]',
        confirmButton: 'w-[323px] h-[45px] bg-primary-500 text-white text-[20px] rounded-[2px] pb-[0px] mb-[0px]',
      },
      confirmButtonColor: '#CF0A0A',
      confirmButtonText: 'Keluar',
      buttonsStyling: false,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Logout Berhasil", "Keluar dari Akun Admin", "success");
        Cookies.remove("token");
        Cookies.remove("refresh_token");
    
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }
    });
  };
  return (
    <nav className="fixed darkbg flex items-center justify-between h-[100px] w-full z-20">
      <Link to="/" className="font-avenirBlack text-primary-500 text-[32px] ml-14">
        OurGym
      </Link>
      <div className="flex items-center pr-16">
        <button>
          <i>
            <SuperAdminIcon className="w-9 mr-3 rounded" />
          </i>
        </button>
        <button onClick={logout}>
          <AngleDownIcon className="w-5" />
        </button>
      </div>
    </nav>
  );
};

export default DashboardNavbar;