import React from "react";
import { Link } from "react-router-dom";

const EditBooking = () => {
  return (
    <div className="ml-[292px] pt-[124px] mr-9">
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
                <label htmlFor="name">Nama Anggota</label>
              </div>
              <div className="flex w-52 h-12 justify-end items-center font-avenirHeavy mb-2">
                <label htmlFor="price">Total Bayar</label>
              </div>
              <div className="flex w-52 h-12 justify-end items-center font-avenirHeavy mb-2">
                <label htmlFor="promo">Kode Promo</label>
              </div>
              <div className="flex w-52 h-12 justify-end items-center font-avenirHeavy mb-2">
                <label htmlFor="method">Metode Pembayaran</label>
              </div>
              <div className="flex w-52 h-12 justify-end items-center font-avenirHeavy mb-2">
                <label htmlFor="status">Status Pembayaran</label>
              </div>
            </div>

            <div className="flex flex-col">
              <input
                id="id"
                type="text"
                className="w-[865px] h-12 ml-12 mb-2 border rounded-lg p-2"
              />
              <input
                id="time"
                type="datetime-local"
                className="w-[865px] h-12 ml-12 mb-2 border rounded-lg p-2"
              />
              <input
                id="name"
                type="text"
                className="w-[865px] h-12 ml-12 mb-2 border rounded-lg p-2"
              />
              <input
                id="price"
                type="number"
                className="w-[865px] h-12 ml-12 mb-2 border rounded-lg p-2"
              />
              <input
                id="promo"
                type="text"
                className="w-[865px] h-12 ml-12 mb-2 border rounded-lg p-2"
              />
              <select
                id="method"
                type="text"
                className="w-[865px] h-12 ml-12 mb-2 border rounded-lg p-2"
              >
                <option value="">-- Pilih Metode Pembayaran --</option>
                <option value="BRI">BRI</option>
                <option value="BNI">BNI</option>
                <option value="MANDIRI">MANDIRI</option>
                <option value="BCA">BCA</option>
                <option value="QRIS">QRIS</option>
              </select>
              <select
                id="status"
                type="text"
                className="w-[865px] h-12 ml-12 mb-2 border rounded-lg p-2"
              >
                <option value="">-- Pilih Status Pembayaran --</option>
                <option value="BERHASIL">BERHASIL</option>
                <option value="GAGAL">GAGAL</option>
                <option value="TERTUNDA">TERTUNDA</option>
              </select>
            </div>
          </div>
          <div className="flex w-full h-12 justify-start pl-[118px] items-center font-avenirBlack mb-2 bg-primary-100">
            <label htmlFor="status">Detail Kelas</label>
          </div>
          <div className="flex flex-row">
            <div>
              <div className="flex w-52 h-12 justify-end items-center font-avenirHeavy mb-2">
                <label htmlFor="type_kelas">Jenis Kelas</label>
              </div>
              <div className="flex w-52 h-12 justify-end items-center font-avenirHeavy mb-2">
                <label htmlFor="name_kelas">Nama Kelas</label>
              </div>
              <div className="flex w-52 h-12 justify-end items-center font-avenirHeavy mb-2">
                <label htmlFor="price_kelas">Harga Kelas</label>
              </div>
            </div>
            <div>
              <select
                id="type_kelas"
                type="text"
                className="w-[865px] h-12 ml-12 mb-2 border rounded-lg p-2"
              >
                <option value="">-- Pilih Jenis Kelas --</option>
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
              </select>
              <select
                id="name_kelas"
                type="text"
                className="w-[865px] h-12 ml-12 mb-2 border rounded-lg p-2"
              >
                <option value="">-- Pilih Kelas --</option>
                <option value="yoga">Yoga untuk Pemula</option>
                <option value="keseimbangan">Keseimbangan Tubuh</option>
                <option value="tidur">Tidur Lebih Baik</option>
                <option value="pompa">Pompa Tubuh</option>
                <option value="perut">Perut Six Pack</option>
                <option value="kardio">Langkah Kardio</option>
                <option value="body">Body Combat</option>
                <option value="aerobik">Aerobik Energy</option>
                <option value="zumba">Zumba</option>
                <option value="muay">Muay Thai</option>
                <option value="pound">Pound Fit</option>
                <option value="anti">Antigravity Yoga</option>
              </select>
              <input
                id="price_kelas"
                type="number"
                className="w-[865px] h-12 ml-12 mb-2 border rounded-lg p-2"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-52 flex justify-end">
            <Link to="/booking">
              <button className="w-28 h-14 bg-white text-primary-500 font-avenirBlack rounded-lg mr-4 border border-primary-500 shadow-md">
                Batal
              </button>
            </Link>
            <button className="w-52 h-14 bg-primary-500 text-white font-avenirBlack rounded-lg shadow-md">
              Simpan Perubahan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBooking;
