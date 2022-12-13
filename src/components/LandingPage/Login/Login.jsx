import React from "react";
import { Link } from "react-router-dom";
// import "./login.css";

import { logo, phone3 } from "../../../assets/img";

const Login = () => {
  return (
    <div className="h-screen darkbg pb-28 flex justify-center items-center">
      <div className="mr-28">
        <img src={phone3} alt="Mobile App" className="w-[300px]" />
      </div>
      <div className="loginpage dark w-[650px] h-[730px] mt-[91px] rounded-[50px]">
        <form
          action="submit"
          className="flex flex-col justify-center items-center"
        >
          <h1 className="font-avenirHeavy text-white font-extrabold text-5xl text-center mt-[73px] mb-12">
            Selamat Datang
          </h1>
          <img src={logo} alt="Logo" className="w-[166px] mb-12" />
          <input
            type="text"
            placeholder="Username"
            className="mb-6 w-[380px] h-14 rounded-lg font-avenirHeavy p-5 border border-primary-500"
          />
          <input
            type="password"
            placeholder="Password"
            className=" w-[380px] h-14 rounded-lg font-avenirHeavy p-5 border border-primary-500"
          />
          <Link to="/dashboard/main">
            <button
              type="submit"
              className="mt-12 w-[380px] h-14 rounded-lg font-avenirHeavy bg-primary-500 text-white">
              Masuk
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
