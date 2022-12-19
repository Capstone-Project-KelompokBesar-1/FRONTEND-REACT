import { useEffect, useState } from "react";
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

import KelasList from "./KelasList";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import moment from "moment";

const Kelas = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.gym.classes);
  const searchField = useSelector((state) => state.gym.searchField);
  const edit = useSelector((state) => state.gym.edit);

  const [selectedButton, setSelectedButton] = useState("semua");

  const isSelected = (button) =>
    selectedButton === button
      ? "border-primary-500 text-white bg-primary-500"
      : "border-primary-500 text-primary-500 bg-white";

  useEffect(() => {
    dispatch(fetchDatas({ url: "/classes", state: "classes" }));
    dispatch(fetchDatas({ url: "/categories", state: "categories" }));

    // eslint-disable-next-line
  }, []);

  const handleSearch = (e) => {
    dispatch(setSearchField(e.target.value.toLocaleLowerCase()));
  };

  const RenderedSearch = () => {
    const searchFilter = data.filter((data) => {
      return data.name.toLowerCase().includes(searchField);
    });

    const buttonFilter = searchFilter.filter((data) => {
      if (selectedButton === "offline") {
        return data.type === "offline";
      } else if (selectedButton === "online") {
        return data.type === "online";
      } else return data;
    });

    if (selectedButton === "offline" || selectedButton === "online") {
      return buttonFilter.map((item, index) => {
        return <KelasList key={item.id} item={item} index={index} />;
      });
    }

    return searchFilter.map((item, index) => {
      return <KelasList key={item.id} item={item} index={index} />;
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
          dispatch(deleteData({ url: "/classes", type: "many" }));

          setTimeout(() => {
            dispatch(fetchDatas({ url: "/classes", state: "classes" }));
          }, 1000);
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
            DATA KELAS GYM
          </h1>

          <i className="mt-[71px]">
            <CalenderIcon className="w-4 h-4 inline mr-1" />
            <p className="inline not-italic">{moment().format("dddd[,] D MMMM YYYY")}</p>
          </i>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-row items-end pb-6">
            <button
              className={`text-sm w-[86px] h-[40px] rounded-[40px] flex justify-center items-center border-2 ${isSelected(
                "semua"
              )} mr-4`}
              onClick={() => setSelectedButton("semua")}
            >
              Semua
            </button>
            <button
              className={`text-sm w-[110px] h-[40px] rounded-[40px] flex justify-center items-center border-2 ${isSelected(
                "online"
              )} mr-4`}
              onClick={() => setSelectedButton("online")}
            >
              Kelas Online
            </button>
            <button
              className={`text-sm w-[110px] h-[40px] rounded-[40px] flex justify-center items-center border-2 ${isSelected(
                "offline"
              )}`}
              onClick={() => setSelectedButton("offline")}
            >
              Kelas Offline
            </button>
          </div>
          <div>
            <div className="my-6 flex flex-col items-end">
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
                  to="/kelas/create"
                  className="w-24 h-11 bg-success-500 rounded-md shadow-md flex justify-center items-center"
                >
                  <TambahDataIcon className="w-2 h-2 inline-block" /> Tambah
                  Baru
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border rounded-2xl h-[530px] overflow-auto">
          <table>
            <thead className="uppercase bg-primary-700 text-left">
              <tr className="text-white">
                <th className="py-3 px-4 w-5 mr-12 text-3xl">
                  <BiCheckbox />
                </th>
                <th className="py-4 px-6 w-80 mr-12">NAMA KELAS</th>
                <th className="py-4 px-6 w-96 mr-12">JENIS KELAS</th>
                <th className="py-4 px-6 w-72 mr-12">KATEGORI KELAS</th>
                <th className="py-4 px-6 w-96 mr-12">HARGA</th>
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

export default Kelas;
