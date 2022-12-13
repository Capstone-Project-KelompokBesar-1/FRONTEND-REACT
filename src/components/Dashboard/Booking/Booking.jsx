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

const Booking = () => {
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
                <th className="py-4 px-6 w-80 mr-12">ID PEMBAYARAN</th>
                <th className="py-4 px-6 w-96 mr-12">WAKTU PEMBAYARAN</th>
                <th className="py-4 px-6 w-72 mr-12">TOTAL BAYAR</th>
                <th className="py-4 px-6 w-96 mr-12">METODE BAYAR</th>
                <th className="py-4 px-6 w-96 mr-12">STATUS PEMBAYARAN</th>
                <th className="py-4 px-6 w-52 mr-12 text-center">TINDAKAN</th>
              </tr>
            </thead>
            <tbody className="font-avenirHeavy text-web-dark">
              <tr>
                <td className="py-4 px-4 text-3xl">
                  <BiCheckboxSquare />
                </td>
                <td className="py-4 px-6">OFFCLASS001</td>
                <td className="py-4 px-6">26 Nov 2022 17:30</td>
                <td className="py-4 px-6">325.000</td>
                <td className="py-4 px-6">Alfamart</td>
                <td className="py-4 px-6">BERHASIL</td>
                <td className="py-4 px-6 text-center">
                  <div className="p-2 bg-info-700 w-10 rounded-[3px] inline-block mr-3">
                    <EditIcon className="w-6 h-6 inline-block" fill="white" />
                  </div>
                  <div className="p-2 bg-primary-700 w-10 rounded-[3px] inline-block">
                    <DeleteIcon className="w-5 h-6 inline-block" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Booking;
