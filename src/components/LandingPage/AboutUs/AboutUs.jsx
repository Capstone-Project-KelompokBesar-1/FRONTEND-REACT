import React from 'react'
import AboutUsImage from '../../assets/img/2. gym.png'

const AboutUs = () => {
  return (
    <div>
      <div className='bg-web-webPrimary h-screen flex'>
        <div className='w-auto h-screen flex justify-center'>
          <div className='text-white w-8/12 h-screen flex items-center'>
            <div>
              <h2 className='font-avenirHeavy text-3xl mb-10 text-center'>Tentang Kami</h2>
              <p className='text-lg'>Our Gym merupakan tempat dengan beberapa jenis peralatan yang digunakan untuk menunjang kebutuhan berolahraga. Kami menyediakan beberapa kelas olahraga yang dapat diikuti oleh anda bersama dengan Personal Traning yang ahli dibidangnya.</p>
            </div>
          </div>
        </div>
        <img src={AboutUsImage} alt="AboutUsImage" className='h-screen' />
      </div>
      <div className='stat bg-gradient-to-r from-primary-500 to-web-blue flex h-52 justify-evenly text-white font-avenirHeavy text-center text-3xl items-center'>
        <div>
          <p className='mb-3'>000</p>
          <p>ANGGOTA</p>
        </div>
        <div>
          <p className='mb-3'>00</p>
          <p>KELAS</p>
        </div>
        <div>
          <p className='mb-3'>00</p>
          <p>PELATIH</p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs