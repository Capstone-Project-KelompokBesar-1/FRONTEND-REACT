import React from 'react';
import {
  calenderIcon,
  searchIcon,
  editIcon,
  deleteIcon,
} from "../../../assets/icons";

const Kelas = () => {
  return (
    <div className="ml-[292px] mt-6 mr-9">
      <div className="flex justify-between">
        <h1 className="font-avenirBlack text-black text-[40px]">
          DATA ANGGOTA
        </h1>
        <i className="mt-[71px]">
          <img
            src={calenderIcon}
            alt="Date Icon"
            className="w-4 inline mr-1"
          />
          <p className="inline not-italic">Rabu, 30 November 2022</p>
        </i>
      </div>

      <div className="my-6 flex justify-between">
        <div className="searchbar">
          <input
            type="text"
            className="w-80 h-11 border-2 border-primary-500 rounded-[60px] p-5"
            placeholder="Pencarian"
          />
          <img
            src={searchIcon}
            alt="Search Icon"
            className="relative w-4 -top-[30px] left-[285px]"
          />
        </div>

        <div className="tableButton flex gap-2 text-black text-[10px]">
          <button className="w-32 h-11 bg-primary-500 rounded-md shadow-md">
            Hapus yang dipilih
          </button>
          <button className="w-24 h-11 bg-success-500 rounded-md shadow-md">
            + Tambah Baru
          </button>
        </div>
      </div>

      <div className="border rounded-2xl overflow-auto">
        <table>
          <thead className="uppercase bg-primary-700 text-left">
            <tr className="text-white">
              <th className="py-4 px-6 w-5"><input type="checkbox" /></th>
              <th className="py-4 px-6 w-80 mr-12">NAMA KELAS</th>
              <th className="py-4 px-6 w-96 mr-12">JENIS KELAS</th>
              <th className="py-4 px-6 w-72 mr-12">KATEGORI KELAS</th>
              <th className="py-4 px-6 w-96 mr-12">HARGA</th>
              <th className="py-4 px-6 w-52 mr-12 text-center">TINDAKAN</th>
            </tr>
          </thead>
          <tbody className="font-avenirHeavy text-web-dark">
            <tr>
              <td className="py-4 px-6"><input type="checkbox" /></td>
              <td className="py-4 px-6">Yoga untuk Pemula</td>
              <td className="py-4 px-6">OFFLINE</td>
              <td className="py-4 px-6">Pikiran dan Tubuh</td>
              <td className="py-4 px-6">125.000</td>
              <td className="py-4 px-6 text-center">
                <button>
                  <img
                    src={editIcon}
                    alt="Edit"
                    className="w-5 inline-block mr-5"
                  />
                </button>
                <button>
                  <img
                    src={deleteIcon}
                    alt="Delete"
                    className="w-5 inline-block"
                  />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Kelas