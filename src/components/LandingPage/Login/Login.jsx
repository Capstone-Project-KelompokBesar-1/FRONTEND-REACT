import React from "react";
import APIAuth from "../../../apis/APIAuth";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { logo, phone3 } from "../../../assets/img";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(email);
    console.log(password);
    await APIAuth.signin({
      email,
      password,
    })
      .then(() => {
        Swal.fire("Login Berhasil", "Masuk sebagai akun admin", "success");
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log("error", error);
        Swal.fire("Login Gagal", "Email atau password mungkin salah", "error");
      });
  };

  return (
    <div className="h-screen bg-gradient-to-tr from-primary-500 to-black flex items-center justify-between px-44">
      <img src={phone3} alt="Mobile App" className="h-[720px] w-[474px] mr-[46px]" />
      <div className="darkbg h-[600px] w-[534px] pb-28 flex justify-center items-center align-middle rounded-[50px]">
        <div className="loginpage dark w-[650px] h-[730px] mt-[91px] rounded-[50px]">
          <form action className="flex flex-col justify-center items-center" onSubmit={handleSubmit}>
            <h1 className="font-avenirHeavy text-white font-extrabold text-[46px] text-center mt-[130px] mb-[39px]">
              Selamat Datang
            </h1>
            <Link to="/">
              <img src={logo} alt="Logo" className="w-[130px] mb-[39px]" />
            </Link>
            <input
              type="email"
              id="email"
              class="mb-5 w-[312px] h-[47px] rounded-lg font-avenirHeavy p-5 border border-primary-500"
              placeholder="Email"
              name="email"
              required
            />

            <input
              type="password"
              id="password"
              class="w-[312px] h-[47px] rounded-lg font-avenirHeavy p-5 border border-primary-500"
              placeholder="Password"
              name="password"
              required
            />
            <button
              type="submit"
              pill={true}
              className="mt-[39px] w-[312px] h-[47px] rounded-lg font-avenirHeavy bg-primary-500 text-white"
            >
              Masuk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
