import React from 'react'
import { TambahDataRed } from '../../../assets/icons'

const EditKelas = () => {
  return (
    <div className="ml-[292px] pt-[124px] mr-9">
      <div>
        <h1 className="font-avenirBlack text-black text-[40px]">
          PERUBAHAN DATA KELAS
        </h1>
        <div className="flex justify-between mb-6">
          <p>Kelas &gt; Ubah Data</p>
          <p>Rabu, 30 November 2022</p>
        </div>

        <div className="border rounded-2xl px-4 py-6">
          {/* Label, Input, & img */}
          <div className="main flex">
            <div>
              <div className="flex w-52 h-12 justify-end items-center font-avenirHeavy mb-2">
                <label htmlFor="name">Nama Kelas</label>
              </div>
              <div className="flex w-52 h-12 justify-end items-center font-avenirHeavy mb-2">
                <label htmlFor="type">Jenis Kelas</label>
              </div>
              <div className="flex w-52 h-12 justify-end items-center font-avenirHeavy mb-2">
                <label htmlFor="category">Kategori Kelas</label>
              </div>
              <div className="flex w-52 h-12 justify-end items-center font-avenirHeavy mb-2">
                <label htmlFor="price">Harga</label>
              </div>
              <div className="flex w-52 h-12 justify-end items-center font-avenirHeavy mb-[105px]">
                <label htmlFor="description">Deskripsi</label>
              </div>
              <div className="flex w-52 h-12 justify-end items-center font-avenirHeavy mb-2">
                <label htmlFor="meet">Jumlah Pertemuan</label>
              </div>
              <div className="flex w-52 h-12 justify-end items-center font-avenirHeavy mb-2">
                <label htmlFor="trainer">Pelatih</label>
              </div>
            </div>

            <div className="flex flex-col">
              <input
                id="name"
                type="text"
                className="w-[523px] h-12 ml-12 mb-2 border rounded-lg p-2"
              />
              <select
                id="type"
                type="text"
                className="w-[523px] h-12 ml-12 mb-2 border rounded-lg p-2"
              >
                <option value="">-- Pilih Jenis Kelas --</option>
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
              </select>
              <input
                id="category"
                type="text"
                className="w-[523px] h-12 ml-12 mb-2 border rounded-lg p-2"
              />
              <input
                id="price"
                type="number"
                className="w-[523px] h-12 ml-12 mb-2 border rounded-lg p-2"
              />
              <textarea
                id="description"
                className="w-[523px] h-[145px] ml-12 mb-2 border rounded-lg p-2"
              />
              <input
                id="meet"
                type="number"
                className="w-[523px] h-12 ml-12 mb-2 border rounded-lg p-2"
              />
              <input
                id="trainer"
                type="text"
                className="w-[523px] h-12 ml-12 mb-2 border rounded-lg p-2"
              />
            </div>
          
            <div className='flex flex-col ml-10'>
              <label htmlFor="meet" className='font-avenirHeavy mb-3'>Thumbnail</label>
              <button className="text-primary-500 border-[3px] border-primary-500 w-[318px] h-[40px] flex py-4 px-8 font-avenirBlack items-center justify-center rounded-lg">
                <TambahDataRed className="w-3 h-3 inline-block mr-3" /> Tambahkan File
              </button>
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
  )
}

export default EditKelas