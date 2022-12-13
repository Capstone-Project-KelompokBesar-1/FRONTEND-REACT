import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../../../assets/img/1. landing page.png';
import appleIcon from '../../../assets/icons/apple-white.svg';
import gplayIcon from '../../../assets/icons/google-play-red.svg';

const Hero = () => {
  return (
    <div id='hero'>
      <div className='h-screen bg-gradient-to-tr from-primary-500 to-black flex mt-16'>
        <img src={heroImage} alt="heroImage" className='h-screen' />
        <div className='w-1/2 self-center'>
          <h1 className='text-white text-5xl font-bold leading-relaxed'>Mulai Aktivitas Olahragamu Sekarang!</h1>
          <p className='text-white text-2xl w-9/12 mt-3 leading-relaxed'>Bersama OurGym kita bantu wujudkan target olahraga anda</p>
          <div className='flex mt-10'>
            <Link className='bg-primary-500 text-white h-14 w-44 rounded-full flex justify-center items-center mr-5 border border-primary-500'>
              <img src={appleIcon} className='h-7 mr-2' alt="AppleIcon" />
              <div>
                <span className='text-xs'>Unduh di</span>
                <p>Apple Store</p>
              </div>
            </Link>
            <Link className='bg-white text-primary-500 h-14 w-44 rounded-full flex justify-center items-center border-2 border-primary-500'>
              <img src={gplayIcon} className='h-7 mr-2' alt="GooglePlayIcon" />
              <div>
                <span className='text-xs'>Dapatkan dari</span>
                <p>Google Play</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero