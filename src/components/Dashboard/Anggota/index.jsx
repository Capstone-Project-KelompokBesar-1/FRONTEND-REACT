import {
  calenderIcon,
  searchIcon,
  editIcon,
  deleteIcon,
} from "../../../assets/icons";

import { ReactComponent as EditIcon } from "../../../assets/icons/edit.svg";

import { BiCheckbox, BiCheckboxSquare } from "react-icons/bi";

export default () => {
  return (
    <>
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
            <button className="w-[75px] h-11 bg-info-100 rounded-md shadow-md">
              Unduh
            </button>
            <button className="w-24 h-11 bg-success-500 rounded-md shadow-md">
              + Tambah Baru
            </button>
          </div>
        </div>

        <div className="border rounded-2xl h-[580px] overflow-auto">
          <table>
            <thead className="uppercase bg-primary-700 text-left">
              <tr className="text-white">
                <th className="py-3 px-4 w-5 mr-12 text-3xl">
                  <BiCheckbox />
                </th>
                <th className="py-4 px-6 w-80 mr-12">NAMA LENGKAP</th>
                <th className="py-4 px-6 w-96 mr-12">EMAIL</th>
                <th className="py-4 px-6 w-72 mr-12">NO. HANDPHONE</th>
                <th className="py-4 px-6 w-96 mr-12">ALAMAT</th>
                <th className="py-4 px-6 w-52 mr-12 text-center">TINDAKAN</th>
              </tr>
            </thead>
            <tbody className="font-avenirHeavy text-web-dark">
              <tr>
                <td className="py-3 px-4 text-3xl">
                  <BiCheckboxSquare />
                </td>
                <td className="py-4 px-6">Hamidun</td>
                <td className="py-4 px-6">hamidin@mail.com</td>
                <td className="py-4 px-6">08123456789</td>
                <td className="py-4 px-6">Jl. Raya Cibaduyut No. 1</td>
                <td className="py-4 px-6 text-center">
                  <EditIcon className="w-5 inline-block mr-5" />
                  <img
                    src={deleteIcon}
                    alt="Delete"
                    className="w-5 inline-block"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
