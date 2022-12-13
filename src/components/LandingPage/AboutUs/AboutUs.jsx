import React from 'react'
import aboutUsImg from '../../../assets/img/2. gym.png'
import StatsAboutUs from './StatsAboutUs'

const AboutUs = () => {
  return (
    <div id='aboutus'>
      <div className='darkbg h-screen flex'>
        <div className='w-auto h-screen flex justify-center'>
          <div className='text-white w-8/12 h-screen flex items-center'>
            <div>
              <h2 className='font-avenirHeavy text-3xl mb-10 text-center'>Tentang Kami</h2>
              <p className='text-lg'>Our Gym merupakan tempat dengan beberapa jenis peralatan yang digunakan untuk menunjang kebutuhan berolahraga. Kami menyediakan beberapa kelas olahraga yang dapat diikuti oleh anda bersama dengan Personal Traning yang ahli dibidangnya.</p>
            </div>
          </div>
        </div>
        <img src={aboutUsImg} alt="AboutUsImage" className='h-screen' />
      </div>
      <StatsAboutUs />
    </div>
  )
}

export default AboutUs