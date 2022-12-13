const EditAnggota = () => {
  return (
    <div className="ml-[292px] pt-[124px] mr-9">
      <div>
        <h1 className="font-avenirBlack text-black text-[40px]">
          PERUBAHAN DATA ANGGOTA
        </h1>
        <div className="flex justify-between mb-6">
          <p>Anggota &gt; Ubah Data</p>
          <p>Rabu, 30 November 2022</p>
        </div>

        <div className="border rounded-2xl px-4 py-6">
          {/* Label, Input, & img */}
          <div className="main flex">
            <div>
              <div className="flex w-52 h-12 justify-end items-center font-avenirHeavy mb-2">
                <label htmlFor="name">Nama</label>
              </div>
              <div className="flex w-52 h-12 justify-end items-center font-avenirHeavy mb-2">
                <label htmlFor="email">Email</label>
              </div>
              <div className="flex w-52 h-12 justify-end items-center font-avenirHeavy mb-2">
                <label htmlFor="phone">No. Handphone</label>
              </div>
              <div className="flex w-52 h-12 justify-end items-center font-avenirHeavy mb-2">
                <label htmlFor="ttl">Tanggal Lahir</label>
              </div>
              <div className="flex w-52 h-12 justify-end items-center font-avenirHeavy mb-2">
                <label htmlFor="jk">Jenis Kelamin</label>
              </div>
              <div className="flex w-52 h-12 justify-end items-center font-avenirHeavy mb-2">
                <label htmlFor="address">Alamat</label>
              </div>
            </div>

            <div className="flex flex-col">
              <input
                id="name"
                type="text"
                className="w-[523px] h-12 ml-12 mb-2 border rounded-lg p-2"
              />
              <input
                id="email"
                type="email"
                className="w-[523px] h-12 ml-12 mb-2 border rounded-lg p-2"
              />
              <input
                id="phone"
                type="text"
                className="w-[523px] h-12 ml-12 mb-2 border rounded-lg p-2"
              />
              <input
                id="ttl"
                type="date"
                className="w-[523px] h-12 ml-12 mb-2 border rounded-lg p-2"
              />
              <select
                id="jk"
                type="text"
                className="w-[523px] h-12 ml-12 mb-2 border rounded-lg p-2"
              >
                <option value="">-- Pilih Jenis Kelamin --</option>
                <option value="Laki-laki">Laki-laki</option>
                <option value="Perempuan">Perempuan</option>
              </select>
              <input
                id="address"
                type="text"
                className="w-[523px] h-12 ml-12 mb-2 border rounded-lg p-2"
              />
            </div>

            <div className="flex justify-end w-[800px]">
              <div className="w-[342px] flex  flex-col justify-center items-center">
                <div className="w-44 h-56 border rounded-lg bg-gray-500/50"></div>
                <button className="w-32 h-10 my-6 bg-primary-500 text-white font-avenirBlack rounded-lg shadow-md">
                  Unggah
                </button>
                <p className="w-64 h-[50px]">
                  File Maximal berukuran 500kb dengan format file .png/.jpg/jpeg
                </p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-52 flex justify-end">
            <button className="w-28 h-14 bg-white text-primary-500 font-avenirBlack rounded-lg mr-4 border border-primary-500 shadow-md">
              Batal
            </button>
            <button className="w-52 h-14 bg-primary-500 text-white font-avenirBlack rounded-lg shadow-md">
              Simpan Perubahan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditAnggota;
