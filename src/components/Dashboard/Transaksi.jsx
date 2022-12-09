const Transaksi = () => {
  return (
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

        <tbody className="font-avenirHeavy text-web-dark">
          <tr>
            <td className="py-4 px-6">Pompa Tubuh</td>
            <td className="py-4 px-6">Offline</td>
            <td className="py-4 px-6">12/12/2021</td>
            <td className="py-4 px-6">Yusuf</td>
            <td className="py-4 px-6 font-avenirBlack text-warning">
              TERTUNDA
            </td>
            <td className="py-4 px-6">Rp. 100.000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transaksi;
