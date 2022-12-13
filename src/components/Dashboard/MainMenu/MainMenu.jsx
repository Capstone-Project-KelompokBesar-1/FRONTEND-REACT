import Transaksi from "./Transaksi";
import {
  AnggotaDashBoardIcon,
  CalenderIcon,
  PelatihDashBoardIcon,
  KelasDashBoardIcon,
  TotalDashBoardIcon,
} from "../../../assets/icons";

const MainMenu = () => {
  return (
    <div>
      <div className="ml-[292px] pt-[124px] mr-9">
        <div className="flex justify-between">
          <h1 className="font-avenirBlack text-black text-[40px]">Dashboard</h1>
          <i className="mt-[71px]">
            <CalenderIcon className="w-4 h-4 inline mr-1" />
            <p className="inline not-italic">Rabu, 30 November 2022</p>
          </i>
        </div>

        <div className="my-6 flex justify-between">
          <div className="w-60 h-36 border-[3px] border-primary-500 rounded-lg p-3">
            <h4 className="text-2xl ml-3">Anggota</h4>
            <div className="flex justify-between items-center mt-7">
              <AnggotaDashBoardIcon className="w-12 h-12 inline-block ml-3" />
              <h3 className="inline-block font-avenirBlack text-5xl mr-3">
                542
              </h3>
            </div>
          </div>
          <div className="w-60 h-36 border-[3px] border-primary-500 rounded-lg p-3">
            <h4 className="text-2xl ml-3">Pelatih</h4>
            <div className="flex justify-between items-center mt-7">
              <PelatihDashBoardIcon className="w-12 h-12 inline-block ml-3" />
              <h3 className="inline-block font-avenirBlack text-5xl mr-3">
                42
              </h3>
            </div>
          </div>
          <div className="w-60 h-36 border-[3px] border-primary-500 rounded-lg p-3">
            <h4 className="text-2xl ml-3">Kelas</h4>
            <div className="flex justify-between items-center mt-7">
              <KelasDashBoardIcon className="w-12 h-12 inline-block ml-3" />
              <h3 className="inline-block font-avenirBlack text-5xl mr-3">
                65
              </h3>
            </div>
          </div>
          <div className="w-[395px] h-36 border-[3px] border-primary-500 rounded-lg p-3">
            <h4 className="text-2xl ml-3">Total Penjualan</h4>
            <div className="flex justify-between items-center mt-7">
              <TotalDashBoardIcon className="w-12 h-12 inline-block ml-3" />
              <h3 className="inline-block font-avenirBlack text-5xl mr-3">
                Rp 759.000
              </h3>
            </div>
          </div>
        </div>
        <Transaksi />
      </div>
    </div>
  )
}

export default MainMenu
