import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDatas, setSearchField } from "../../../redux/gymSlice";

import {
  CalenderIcon,
  SearchIcon,
  DeleteBlackIcon,
  TambahDataIcon,
} from "../../../assets/icons";
import { BiCheckbox } from "react-icons/bi";
import PelatihList from "./PelatihList";
import { Link } from "react-router-dom";

const Pelatih = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.gym.trainers);
  const searchField = useSelector((state) => state.gym.searchField);

  useEffect(() => {
    dispatch(fetchDatas({ url: "/trainers", state: "trainers" }));

    // eslint-disable-next-line
  }, []);

  const handleSearch = (e) => {
    dispatch(setSearchField(e.target.value.toLocaleLowerCase()));
  };

  const renderSearch = () => {
    const searchFilter = data.filter((data) => {
      return data.name.toLowerCase().includes(searchField);
    });

    return searchFilter.map((trainer, index) => {
      return (
        <PelatihList
          key={trainer.id}
          name={trainer.name}
          expertise={trainer.expertise}
          gender={trainer.gender}
          description={trainer.description}
          index={index}
        />
      );
    });
  };

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
              onChange={handleSearch}
            />
            <SearchIcon className="relative w-4 h-4 -top-[30px] left-[285px]" />
          </div>

          <div className="tableButton flex gap-2 text-black text-[10px]">
            <button className="w-32 h-11 bg-primary-500 rounded-md shadow-md">
              <DeleteBlackIcon className="w-2 h-2 inline-block mr-1" />
              Hapus yang dipilih
            </button>
            <Link className="w-24 h-11 bg-success-500 rounded-md shadow-md flex justify-center items-center">
              <TambahDataIcon className="w-2 h-2 inline-block" /> Tambah Baru
            </Link>
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

            {renderSearch()}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Pelatih;
