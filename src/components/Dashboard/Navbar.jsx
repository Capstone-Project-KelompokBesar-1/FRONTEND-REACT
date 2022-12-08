import { superAdminIcon, menuDashboardIcon } from "../../assets/icons";

const Navbar = () => {
  return (
    <nav className="darkbg flex items-center">
      <h1>OurGym</h1>
      <div>
        <i>
          <img src={menuDashboardIcon} alt="Menu" />
        </i>
        <div>
          <img src={superAdminIcon} alt="Admin Avatar" />v
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
