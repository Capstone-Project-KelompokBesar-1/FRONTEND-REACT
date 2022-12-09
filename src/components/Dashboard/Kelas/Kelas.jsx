import React from 'react';
import gymImage from '../../../assets/img/2. gym.png'

const Kelas = () => {
  return (
    <div className='ml-[256px] pt-[100px]'>
      <h1>DATA KELAS GYM</h1>
      <p>Rabu, 30 November 2022</p>
      <input type="text" />
      <div className='flex flex-row'>
        <button>SEMUA</button>
        <button>Kelas Online</button>
        <button>Kelas Offline</button>
      </div>
      <div>
        <button>Hapus yang dipilih</button>
        <button>Tambah Baru</button>
      </div>
      <table>
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>NAMA KELAS</th>
            <th>JENIS KELAS</th>
            <th>KATEGORI KELAS</th>
            <th>HARGA</th>
            <th>TINDAKAN</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox" /></td>
            <td>Yoga untuk Pemula</td>
            <td>OFFLINE</td>
            <td>Pikiran dan Tubuh</td>
            <td>125.000</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Kelas