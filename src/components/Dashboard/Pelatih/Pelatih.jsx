import { useEffect, useState } from "react";
import APIClient from "../../../apis/APIClient";

import { TbDownload } from "react-icons/tb";
import {
  EditIcon,
  CalenderIcon,
  DeleteIcon,
  SearchIcon,
  DeleteBlackIcon,
  TambahDataIcon,
} from "../../../assets/icons";
import { BiCheckbox, BiCheckboxSquare } from "react-icons/bi";
import { Link } from "react-router-dom";
import PelatihList from "./PelatihList";

const Pelatih = () => {
  const [data, setData] = useState([]);

  const fetchTrainers = async () => {
    try {
      const {
        data: { data },
      } = await APIClient.get("/trainers");
      setData(data);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTrainers();
  }, []);

  return (
    <div>
      <div className="ml-[292px] pt-[124px] mr-9">
        <div className="flex justify-between">
          <h1 className="font-avenirBlack text-black text-[40px]">
            DATA PELATIH
          </h1>

          <i className="mt-[71px]">
            <CalenderIcon className="w-4 h-4 inline mr-1" />
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
            <SearchIcon className="relative w-4 h-4 -top-[30px] left-[285px]" />
          </div>

          <div className="tableButton flex gap-2 text-black text-[10px]">
            <button className="w-32 h-11 bg-primary-500 rounded-md shadow-md">
              <DeleteBlackIcon className="w-2 h-2 inline-block mr-1" />
              Hapus yang dipilih
            </button>
            <button className="w-[75px] h-11 bg-info-100 rounded-md shadow-md">
              <TbDownload className="inline-block mr-1" /> Unduh
            </button>
            <button className="w-24 h-11 bg-success-500 rounded-md shadow-md">
              <TambahDataIcon className="w-2 h-2 inline-block" /> Tambah Baru
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
                <th className="py-4 px-6 w-96 mr-12">KEAHLIAN</th>
                <th className="py-4 px-6 w-72 mr-12">JENIS KELAMIN</th>
                <th className="py-4 px-6 w-96 mr-12">DESKRIPSI</th>
                <th className="py-4 px-6 w-52 mr-12 text-center">TINDAKAN</th>
              </tr>
            </thead>

            {data.map((trainer) => (
              <PelatihList
                name={trainer.name}
                expertise={trainer.expertise}
                gender={trainer.gender}
                description={trainer.description}
              />
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Pelatih;
