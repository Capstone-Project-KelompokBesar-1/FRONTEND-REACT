import {
  superAdminIcon,
  loncengIcon,
  angleDownIcon,
  LoncengIcon,
  SuperAdminIcon,
  AngleDownIcon,
} from "../../../assets/icons";

const DashboardNavbar = () => {
  return (
    <nav className="darkbg flex items-center justify-between h-[100px]">
      <h1 className="font-avenirBlack text-primary-500 text-[32px] ml-14">
        OurGym
      </h1>
      <div className="flex items-center pr-16">
        <i>
          <LoncengIcon className="w-9 mr-3" />
        </i>
        <i>
          <SuperAdminIcon className="w-9 mr-3" />
        </i>
        <i>
          <AngleDownIcon className="w-5" />
        </i>
      </div>
    </nav>
  );
};

export default DashboardNavbar;