import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import APIClient from "../../../apis/APIClient";
import { fetchDatas } from "../../../redux/gymSlice";

const EditBooking = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.gym.edit);
  const navigate = useNavigate();

  const baseData = {
    bookingId: state.bookingId,
    classId: state.classId,
    userId: state.userId,
    date: state.date,
    amount: state.amount,
    method: "",
    status:state.status,
  };
  console.log(baseData);
  const [data, setData] = useState(baseData);

  useEffect(() => {
    // console.log(data);
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
    if (
      !data.bookingId ||
      !data.classId ||
      !data.userId ||
      !data.date ||
      !data.amount ||
      !data.method ||
      !data.status
    ) {
      alert("Data tidak boleh kosong");
      navigate("/booking")
    } else {
      try {
        e.preventDefault();
        // add content-type json & charset=UTF-8 to header
        await APIClient.put(`/transactions/${state.id}`, data);

        dispatch(fetchDatas({ url: "/transactions", state: "transactions" }));
        navigate("/booking");
      } catch (error) {
        console.log(error);
      }
    }
  };
  // console.log(data);

  return (
    <form className="ml-[292px] pt-[124px] mr-9" onSubmit={handleSubmit}>
      <div>
        <h1 className="font-avenirBlack text-black text-[40px]">
          PERUBAHAN DATA TRANSAKSI
        </h1>
        <div className="flex justify-between mb-6">
          <p>Transaksi &gt; Ubah Data</p>
          <p>Rabu, 30 November 2022</p>
        </div>

        <div className="border rounded-2xl px-4 py-6">
          {/* Label, Input, & img */}
          <div className="main flex">
            <div>
              <div className="flex w-52 h-12 justify-end items-center font-avenirHeavy mb-2">
                <label htmlFor="id">ID Pembayaran</label>
              </div>
              <div className="flex w-52 h-12 justify-end items-center font-avenirHeavy mb-2">
                <label htmlFor="time">Waktu Pembelian</label>
              </div>
              <div className="flex w-52 h-12 justify-end items-center font-avenirHeavy mb-2">
                <label htmlFor="name">ID Anggota</label>
              </div>
              <div className="flex w-52 h-12 justify-end items-center font-avenirHeavy mb-2">
                <label htmlFor="price">Total Bayar</label>
              </div>
              {/* <div className="flex w-52 h-12 justify-end items-center font-avenirHeavy mb-2">
                <label htmlFor="promo">Kode Promo</label>
              </div> */}
              <div className="flex w-52 h-12 justify-end items-center font-avenirHeavy mb-2">
                <label htmlFor="method">Metode Pembayaran</label>
              </div>
              <div className="flex w-52 h-12 justify-end items-center font-avenirHeavy mb-2">
                <label htmlFor="status">Status Pembayaran</label>
              </div>
            </div>

            <div className="flex flex-col">
              <p
                id="id"
                type="text"
                name="bookingId"
                className="w-[865px] h-12 ml-12 mb-2 border rounded-lg p-2"
                // value=
                // onChange={handleEdit}
              >{data.bookingId}</p>
              <input
                id="time"
                type="text"
                name="date"
                className="w-[865px] h-12 ml-12 mb-2 border rounded-lg p-2"
                value={data.date}
                onChange={handleEdit}
              />
              <input
                id="name"
                type="number"
                name="userId"
                className="w-[865px] h-12 ml-12 mb-2 border rounded-lg p-2"
                value={data.userId}
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
              {/* <input
                id="method"
                type="number"
                name="method"
                className="w-[865px] h-12 ml-12 mb-2 border rounded-lg p-2"
                value={data.method}
                onChange={handleNumberEdit}
              /> */}
              <select
                id="method"
                type="number"
                name="method"
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
              <select
                id="status"
                type="text"
                name="status"
                className="w-[865px] h-12 ml-12 mb-2 border rounded-lg p-2"
                value={data.status}
                onChange={handleEdit}
              >
                <option value="">-- Pilih Status Pembayaran --</option>
                <option value="berhasil">BERHASIL</option>
                <option value="tertunda">GAGAL</option>
                <option value="gagal">TERTUNDA</option>
              </select>
            </div>
          </div>
          <div className="flex w-full h-12 justify-start pl-[118px] items-center font-avenirBlack mb-2 bg-primary-100">
            <label htmlFor="status">Detail Kelas</label>
          </div>
          <div className="flex flex-row">
            <div>
              {/* <div className="flex w-52 h-12 justify-end items-center font-avenirHeavy mb-2">
                <label htmlFor="type_kelas">Jenis Kelas</label>
              </div> */}
              <div className="flex w-52 h-12 justify-end items-center font-avenirHeavy mb-2">
                <label htmlFor="name_kelas">Nama Kelas</label>
              </div>
              {/* <div className="flex w-52 h-12 justify-end items-center font-avenirHeavy mb-2">
                <label htmlFor="price_kelas">Harga Kelas</label>
              </div> */}
            </div>
            <div>
              {/* <select
                id="type_kelas"
                type="text"
                className="w-[865px] h-12 ml-12 mb-2 border rounded-lg p-2"
                value={data.class.type}
                onChange={handleEdit}
              >
                <option value="">-- Pilih Jenis Kelas --</option>
                <option value={"online"}>Online</option>
                <option value={"offline"}>Offline</option>
              </select> */}
              <select
                id="name_kelas"
                type="number"
                name="classId"
                className="w-[865px] h-12 ml-12 mb-2 border rounded-lg p-2"
                value={data.classId}
                onChange={handleNumberEdit}
              >
                <option value="">-- Pilih Kelas --</option>
                <option value={1}>Yoga</option>
                <option value={2}>Atletik</option>
              </select>
              {/* <input
                id="price_kelas"
                type="number"
                className="w-[865px] h-12 ml-12 mb-2 border rounded-lg p-2"
                value={data.amount}
                onChange={handleNumberEdit}
              /> */}
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-52 flex justify-end">
            <Link to="/booking">
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

export default EditBooking;
