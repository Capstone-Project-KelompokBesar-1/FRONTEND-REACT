import React from "react";
import { Link } from "react-router-dom";
// import "./login.css";

import { logo, phone3 } from "../../../assets/img";

const Login = () => {
  return (
    <div className="h-screen bg-gradient-to-tr from-primary-500 to-black flex items-center justify-between px-44">
      <img src={phone3} alt="Mobile App" className="h-[720px] w-[474px] mr-[46px]" />
      <div className="darkbg h-[600px] w-[534px] pb-28 flex justify-center items-center align-middle rounded-[50px]">
        <div className="loginpage dark w-[650px] h-[730px] mt-[91px] rounded-[50px]">
          <form
            action="submit"
            className="flex flex-col justify-center items-center"
          >
            <h1 className="font-avenirHeavy text-white font-extrabold text-[46px] text-center mt-[130px] mb-[39px]">
              Selamat Datang
            </h1>
            <img src={logo} alt="Logo" className="w-[130px] mb-[39px]" />
            <input
              type="text"
              placeholder="Username"
              className="mb-5 w-[312px] h-[47px] rounded-lg font-avenirHeavy p-5 border border-primary-500"
            />
            <input
              type="password"
              placeholder="Password"
              className=" w-[312px] h-[47px] rounded-lg font-avenirHeavy p-5 border border-primary-500"
            />
            <Link to="/dashboard/main">
              <button
                type="submit"
                className="mt-[39px] w-[312px] h-[47px] rounded-lg font-avenirHeavy bg-primary-500 text-white">
                Masuk
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
