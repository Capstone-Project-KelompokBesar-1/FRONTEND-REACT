import Transaksi from "./Transaksi";
import { useEffect, useState } from "react";
import APIClient from "../../../apis/APIClient";

import {
  AnggotaDashBoardIcon,
  CalenderIcon,
  PelatihDashBoardIcon,
  KelasDashBoardIcon,
  TotalDashBoardIcon,
} from "../../../assets/icons";

const MainMenu = () => {
  const [data, setData] = useState([]);

  const fetchTransactions = async () => {
    try {
      const {
        data: { data },
      } = await APIClient.get("/transactions/history");
      setData(data);
      // console.log(data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

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

        <div className="border rounded-2xl h-[500px] overflow-auto">
          <h3 className="font-avenirHeavy text-xl p-4">Transaksi Terkini</h3>
          <table className="text-left">
            <thead className="uppercase bg-primary-700">
              <tr className="text-white">
                <th className="py-4 px-6 w-72 mr-12">Nama Kelas</th>
                <th className="py-4 px-6 w-72 ml-7">Jenis Kelas</th>
                <th className="py-4 px-6 w-72 ml-7">Tanggal</th>
                <th className="py-4 px-6 w-72 ml-7">Nama Pemesan</th>
                <th className="py-4 px-6 w-72 ml-7">Status</th>
                <th className="py-4 px-6 w-52 ml-7">Harga</th>
              </tr>
            </thead>
            {data.map((item) => (
              <Transaksi
                key={item.id}
                gymClass={item.class.name}
                classType={item.class.type}
                date={item.updated_at}
                userName={item.user.name}
                status={item.status}
                price={item.class.price}
              />
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
