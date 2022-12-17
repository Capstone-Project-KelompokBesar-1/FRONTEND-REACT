import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDatas } from "../../../redux/gymSlice";

import { Link, useNavigate } from "react-router-dom";
import APIClient from "../../../apis/APIClient";

const EditAnggota = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.gym.edit);
  const navigate = useNavigate();

  const baseData = {
    name: state.name,
    email: state.email,
    phone: state.phone,
    birth_date: state.birth_date,
    gender: state.gender,
    address: state.address,
  };
  const [data, setData] = useState(baseData);

  useEffect(() => {
    console.log(data);
    setData(baseData);
  }, []);

  const handleEdit = (e) => {
    setData((data) => {
      return { ...data, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    if (!data.name || !data.email || !data.phone || !data.birth_date) {
      alert("Data tidak boleh kosong");
    } else {
      try {
        e.preventDefault();
        // add content-type json & charset=UTF-8 to header
        await APIClient.put(`/users/${state.id}`, data);

        dispatch(fetchDatas({ url: "/users", state: "users" }));
        navigate("/anggota");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form className="ml-[292px] pt-[124px] mr-9" onSubmit={handleSubmit}>
      <div>
        <h1 className="font-avenirBlack text-black text-[40px]">
          PERUBAHAN DATA ANGGOTA
        </h1>
        <div className="flex justify-between mb-6">
          <p>Anggota &gt; Ubah Data</p>
          <p>Rabu, 30 November 2022</p>
        </div>

        <div className="border rounded-2xl px-4 py-6">
          {/* Label, Input, & img */}
          <div className="main flex">
            <div>
              <div className="flex w-52 h-12 justify-end items-center font-avenirHeavy mb-2">
                <label htmlFor="name">Nama</label>
              </div>
              <div className="flex w-52 h-12 justify-end items-center font-avenirHeavy mb-2">
                <label htmlFor="email">Email</label>
              </div>
              <div className="flex w-52 h-12 justify-end items-center font-avenirHeavy mb-2">
                <label htmlFor="phone">No. Handphone</label>
              </div>
              <div className="flex w-52 h-12 justify-end items-center font-avenirHeavy mb-2">
                <label htmlFor="ttl">Tanggal Lahir</label>
              </div>
              <div className="flex w-52 h-12 justify-end items-center font-avenirHeavy mb-2">
                <label htmlFor="jk">Jenis Kelamin</label>
              </div>
              <div className="flex w-52 h-12 justify-end items-center font-avenirHeavy mb-2">
                <label htmlFor="address">Alamat</label>
              </div>
            </div>

            <div className="flex flex-col">
              <input
                id="name"
                type="text"
                name="name"
                className="w-[523px] h-12 ml-12 mb-2 border rounded-lg p-2"
                value={data.name}
                onChange={handleEdit}
              />
              <input
                id="email"
                type="email"
                name="email"
                className="w-[523px] h-12 ml-12 mb-2 border rounded-lg p-2"
                value={data.email}
                onChange={handleEdit}
              />
              <input
                id="phone"
                type="text"
                name="phone"
                className="w-[523px] h-12 ml-12 mb-2 border rounded-lg p-2"
                value={data.phone}
                onChange={handleEdit}
              />
              <input
                id="ttl"
                type="date"
                name="birth_date"
                className="w-[523px] h-12 ml-12 mb-2 border rounded-lg p-2"
                value={data.birth_date}
                onChange={handleEdit}
              />
              <select
                id="jk"
                type="text"
                name="gender"
                className="w-[523px] h-12 ml-12 mb-2 border rounded-lg p-2"
                value={data.gender}
                onChange={handleEdit}
              >
                <option value="Pilih">-- Pilih Jenis Kelamin --</option>
                <option value="Laki-Laki">Laki-laki</option>
                <option value="Perempuan">Perempuan</option>
              </select>
              <input
                id="address"
                type="text"
                name="address"
                className="w-[523px] h-12 ml-12 mb-2 border rounded-lg p-2"
                value={data.address}
                onChange={handleEdit}
              />
            </div>

            <div className="flex justify-end w-[800px]">
              <div className="w-[342px] flex  flex-col justify-center items-center">
                <div className="w-44 h-56 border rounded-lg bg-gray-500/50"></div>
                <button className="w-32 h-10 my-6 bg-primary-500 text-white font-avenirBlack rounded-lg shadow-md">
                  Unggah
                </button>
                <p className="w-64 h-[50px]">
                  File Maximal berukuran 500kb dengan format file .png/.jpg/jpeg
                </p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-52 flex justify-end">
            <Link to="/anggota">
              <button className="w-28 h-14 bg-white text-primary-500 font-avenirBlack rounded-lg mr-4 border border-primary-500 shadow-md">
                Batal
              </button>
            </Link>
            <button
              className="w-52 h-14 bg-primary-500 text-white font-avenirBlack rounded-lg shadow-md"
              type="submit"
            >
              Simpan Perubahan
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default EditAnggota;
