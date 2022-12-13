import React from 'react'

const StatsAboutUs = () => {
  return (
    <div className='grid content-center bg-gradient-to-r from-primary-500 to-web-blue h-[312px]'>
        <hr  className='mx-28 border-dashed mb-10'/>
        <div className='flex justify-evenly text-white font-avenirHeavy text-center text-[32px]'>
          <div>
            <p className='mb-3 text-[40px]'>000</p>
            <p>ANGGOTA</p>
          </div>
          <div>
            <p className='mb-3 text-[40px]'>00</p>
            <p>KELAS</p>
          </div>
          <div>
            <p className='mb-3 text-[40px]'>00</p>
            <p>PELATIH</p>
          </div>
        </div>
        <hr className='mx-28 border-dashed mt-10'/>
    </div>
  )
}

export default StatsAboutUs