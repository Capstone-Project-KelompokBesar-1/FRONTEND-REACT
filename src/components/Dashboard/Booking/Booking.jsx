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

import BookingList from "./BookingList";
import { Link } from "react-router-dom";

const Booking = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.gym.transactions);
  const searchField = useSelector((state) => state.gym.searchField);
  const edit = useSelector((state) => state.gym.edit);

  useEffect(() => {
    dispatch(fetchDatas({ url: "/transactions", state: "transactions" }));

    // eslint-disable-next-line
  }, []);

  const handleSearch = (e) => {
    dispatch(setSearchField(e.target.value.toLocaleLowerCase()));
  };

  const RenderedSearch = () => {
    const searchFilter = data.filter((data) => {
      return data.id.toLowerCase().includes(searchField);
    });

    return searchFilter.map((item, index) => {
      return (
        <BookingList
          key={item.id}
          bookingId={item.id}
          userId={item.user_id}
          classId={item.class_id}
          date={item.updated_at}
          amount={item.amount}
          method={item.payment_method_id}
          status={item.status}
          index={index}
        />
      );
    });
  };

  const handleDelete = () => {
    if (edit.length < 1) return alert("Pilih data yang akan dihapus");
    dispatch(deleteData({ url: "/transactions", type: "many" }));
    dispatch(fetchDatas({ url: "/transactions", state: "transactions" }));
  };

  return (
    <div>
      <div className="ml-[292px] pt-[124px] mr-9">
        <div className="flex justify-between">
          <h1 className="font-avenirBlack text-black text-[40px]">
            DATA TRANSAKSI
          </h1>

          <i className="mt-[71px]">
            <CalenderIcon className="w-4 h-4 inline mr-1" />
            <p className="inline not-italic">Rabu, 30 November 2022</p>
          </i>
        </div>

        <div className="flex justify-between">
          <div className="flex items-end pb-6">
            <select
              id="type_kelas"
              type="text"
              className="w-[224px] h-10 border-2 text-primary-500 font-avenirHeavy border-primary-500 rounded-lg py-[7px] pl-4"
            >
              <option value="">SEMUA</option>
              <option value="berhasil">BERHASIL</option>
              <option value="gagal">GAGAL</option>
              <option value="tertunda">TERTUNDA</option>
            </select>
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

                <Link to="/booking/create" className="w-24 h-11 bg-success-500 rounded-md shadow-md flex justify-center items-center">
                  <TambahDataIcon className="w-2 h-2 inline-block" /> Tambah Baru

                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border rounded-2xl h-[580px] overflow-auto">
          <table>
            <thead className="uppercase bg-primary-700 text-left">
              <tr className="text-white">
                <th className="py-3 px-4 w-5 mr-12 text-3xl">
                  <BiCheckbox />
                </th>
                <th className="py-4 px-6 w-80 mr-12">ID PEMBAYARAN</th>
                <th className="py-4 px-6 w-96 mr-12 text-center">
                  WAKTU PEMBAYARAN
                </th>
                <th className="py-4 px-6 w-72 mr-12">TOTAL BAYAR</th>
                <th className="py-4 px-6 w-96 mr-12">METODE BAYAR</th>
                <th className="py-4 px-6 w-96 mr-12">STATUS PEMBAYARAN</th>
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

export default Booking;
