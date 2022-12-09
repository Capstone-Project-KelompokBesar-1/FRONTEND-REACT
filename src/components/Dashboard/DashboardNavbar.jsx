import { superAdminIcon, loncengIcon, angleDownIcon } from "../../assets/icons";

const DashboardNavbar = () => {
  return (
    <nav className="fixed darkbg flex items-center justify-between h-[100px] w-full">
      <h1 className="font-avenirBlack text-primary-500 text-[32px] ml-14">
        OurGym
      </h1>
      <div className="flex items-center pr-16">
        <i>
          <img src={loncengIcon} alt="Menu" className="w-9 mr-3" />
        </i>
        <i>
          <img src={superAdminIcon} alt="Admin Avatar" className="w-9 mr-3" />
        </i>
        <i>
          <img src={angleDownIcon} alt="Admin Avatar" className="w-5" />
        </i>
      </div>
    </nav>
  );
};

export default DashboardNavbar;