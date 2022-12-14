import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import APIClient from "../../../apis/APIClient";
import { fetchDatas } from "../../../redux/gymSlice";

const CreateBooking = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const classes = useSelector((state) => state.gym.classes);
  const users = useSelector((state) => state.gym.users);

  const baseData = {
    user_id: "",
    class_id: "",
    amount: "",
    payment_method_id: "",
  };
  const [data, setData] = useState(baseData);

  useEffect(() => {
    dispatch(fetchDatas({ url: "/users", state: "users" }));
    dispatch(fetchDatas({ url: "/classes", state: "classes" }));
    setData(baseData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEdit = (e) => {
    setData((data) => {
      return { ...data, [e.target.name]: e.target.value };
    });
  };

  const handleNumberEdit = (e) => {
    setData((data) => {
      return { ...data, [e.target.name]: parseInt(e.target.value) };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !data.user_id ||
      !data.class_id ||
      !data.amount ||
      !data.payment_method_id
    ) {
      return Swal.fire("Incomplete", "Lengkapi seluruh data terlebih dahulu sebelum melakukan submit!", "warning");
    } else {
      const user = users.find(
        (user) => user.name.toLowerCase() === data.user_id.toLowerCase()
      );
      if (user) {
        try {
          // add content-type json & charset=UTF-8 to header
          await APIClient.post(`/transactions`, { ...data, user_id: user.id });
          Swal.fire("Submitted", "Data transaksi baru berhasil dibuat!", "success");
          dispatch(fetchDatas({ url: "/transactions", state: "transactions" }));
          navigate("/booking");
        } catch (error) {
          console.log(error);
        }
      } else return Swal.fire("Failed", "User tidak dapat ditemukan!", "error");
    }
  };

  return (
    <form className="ml-[292px] pt-[124px] mr-9" onSubmit={handleSubmit}>
      <div>
        <h1 className="font-avenirBlack text-black text-[40px]">
          TAMBAH TRANSAKSI BARU
        </h1>
        <div className="flex justify-between mb-6">
          <p>Transaksi &gt; Ubah Data</p>
          <p>{moment().format("dddd[,] D MMMM YYYY")}</p>
        </div>

        <div className="border rounded-2xl px-4 py-6">
          {/* Label, Input, & img */}
          <div className="main flex">
            <div>
              <div className="flex w-52 h-12 justify-end items-center font-avenirHeavy mb-2">
                <label htmlFor="name">Nama Anggota</label>
              </div>
              <div className="flex w-52 h-12 justify-end items-center font-avenirHeavy mb-2">
                <label htmlFor="price">Total Bayar</label>
              </div>
              <div className="flex w-52 h-12 justify-end items-center font-avenirHeavy mb-2">
                <label htmlFor="payment_method_id">Metode Pembayaran</label>
              </div>
            </div>

            <div className="flex flex-col">
              <input
                id="name"
                type="text"
                name="user_id"
                className="w-[865px] h-12 ml-12 mb-2 border rounded-lg p-2"
                value={data.user_id}
                onChange={handleEdit}
              />
              <input
                id="price"
                type="number"
                name="amount"
                className="w-[865px] h-12 ml-12 mb-2 border rounded-lg p-2"
                value={data.amount}
                onChange={handleNumberEdit}
              />
              <select
                id="method"
                type="number"
                name="payment_method_id"
                className="w-[865px] h-12 ml-12 mb-2 border rounded-lg p-2"
                value={data.method}
                onChange={handleNumberEdit}
              >
                <option value="">-- Pilih Metode Pembayaran --</option>
                <option value={1}>Indomaret</option>
                <option value={2}>BRI</option>
                <option value={3}>BNI</option>
                <option value={4}>MANDIRI</option>
                <option value={5}>BCA</option>
              </select>
            </div>
          </div>
          <div className="flex w-full h-12 justify-start pl-[118px] items-center font-avenirBlack mb-2 bg-primary-100">
            <label htmlFor="status">Detail Kelas</label>
          </div>
          <div className="flex flex-row">
            <div>
              <div className="flex w-52 h-12 justify-end items-center font-avenirHeavy mb-2">
                <label htmlFor="name_kelas">Nama Kelas</label>
              </div>
            </div>
            <div>
              <select
                id="name_kelas"
                type="number"
                name="class_id"
                className="w-[865px] h-12 ml-12 mb-2 border rounded-lg p-2"
                value={data.class_id}
                onChange={handleNumberEdit}
              >
                <option value="">-- Pilih Kelas --</option>
                {classes.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-52 flex justify-end">
            <Link to="/booking">
              <button
                className="w-28 h-14 bg-white text-primary-500 font-avenirBlack rounded-lg mr-4 border border-primary-500 shadow-md"
                type="button"
              >
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

export default CreateBooking;
