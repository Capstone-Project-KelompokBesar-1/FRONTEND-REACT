import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchDatas,
  setSearchField,
  deleteData,
} from "../../../redux/gymSlice";

import {
  CalenderIcon,
  SearchIcon,
  DeleteBlackIcon,
  TambahDataIcon,
} from "../../../assets/icons";
import { BiCheckbox } from "react-icons/bi";

import AnggotaList from "./AnggotaList";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import moment from "moment";

const Anggota = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.gym.users);
  const searchField = useSelector((state) => state.gym.searchField);
  const edit = useSelector((state) => state.gym.edit);

  useEffect(() => {
    dispatch(fetchDatas({ url: "/users", state: "users" }));

    // eslint-disable-next-line
  }, []);

  const handleSearch = (e) => {
    dispatch(setSearchField(e.target.value.toLocaleLowerCase()));
  };

  const RenderedSearch = () => {
    const searchFilter = data.filter((data) => {
      return data.name.toLowerCase().includes(searchField);
    });

    return searchFilter.map((item, index) => {
      return (
        <AnggotaList
          key={item.id}
          id={item.id}
          name={item.name}
          phone={item.phone}
          email={item.email}
          address={item.address}
          birth_date={item.birth_date}
          gender={item.gender}
          index={index}
        />
      );
    });
  };

  const handleDelete = () => {
    if (edit.length < 1)
      return Swal.fire(
        "Nothing Selected",
        "Pilih data yang ingin dihapus!",
        "warning"
      );
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are You Sure?",
        text: "Data yang terhapus tidak dapat dikembalikan",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Delete",
        cancelButtonText: "Cancel",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            "Deleted",
            "Data yang dipilih telah terhapus!",
            "success"
          );
          dispatch(deleteData({ url: "/users", type: "many" }));
          dispatch(fetchDatas({ url: "/users", state: "users" }));
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Penghapusan data dibatalkan",
            "error"
          );
        }
      });
  };

  return (
    <div>
      <div className="ml-[292px] pt-[124px] mr-9">
        <div className="flex justify-between">
          <h1 className="font-avenirBlack text-black text-[40px]">
            DATA ANGGOTA
          </h1>

          <i className="mt-[71px]">
            <CalenderIcon className="w-4 h-4 inline mr-1" />
            <p className="inline not-italic">{moment().format("dddd[,] D MMMM YYYY")}</p>
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
            <button
              className="w-32 h-11 bg-primary-500 rounded-md shadow-md"
              onClick={handleDelete}
            >
              <DeleteBlackIcon className="w-2 h-2 inline-block mr-1" />
              Hapus yang dipilih
            </button>
            <Link
              to="/anggota/create"
              className="w-24 h-11 bg-success-500 rounded-md shadow-md flex justify-center items-center"
            >
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
                <th className="py-4 px-6 w-96 mr-12">EMAIL</th>
                <th className="py-4 px-6 w-72 mr-12">NO. HANDPHONE</th>
                <th className="py-4 px-6 w-96 mr-12">ALAMAT</th>
                <th className="py-4 px-6 w-52 mr-12 text-center">TINDAKAN</th>
              </tr>
            </thead>

            <RenderedSearch />
          </table>
        </div>
      </div>
    </div>
  );
};

export default Anggota;
