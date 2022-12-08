import React from 'react'
import iconLocation from '../../../assets/icons/location-white.svg'
import iconPhone from '../../../assets/icons/phone.svg'
import iconMail from '../../../assets/icons/mail.svg'
import Footer from '../Footer/Footer'

const Contact = () => {
  return (
    <div className='h-[1358px] bg-gradient-to-r from-primary-500 to-web-blue text-white'>
      <h2 className='text-center font-avenirBlack text-3xl pt-16 pb-14'>Kontak</h2>
      <div className='flex mx-32'>
        <ul className='w-1/2'>
          <li className='flex w-[400px] items-center mb-6'><img src={iconLocation} alt="Icon Location" className='h-8 mr-6'/><p className='leading-8'>Jalan Puntadewa, Nomor 23, Karangbesuki, Kota Malang, Jawa Timur. 65146.</p></li>
          <li className='flex items-center mb-6'><img src={iconPhone} alt="Icon Phone" className='h-8 mr-6'/><p>0813-2222-8686</p></li>
          <li className='flex items-center mb-6'><img src={iconMail} alt="Icon Mail" className='h-8 mr-6'/><p>Ourgym@officialgymindonesia</p></li>
        </ul>
        <div className='w-1/2 flex flex-col'>
          <input type="text" placeholder='Nama' className='w-[588px] h-12 mb-3 rounded-lg p-4'/>
          <input type="email" placeholder='Email' className='w-[588px] h-12 mb-3 rounded-lg p-4'/>
          <input type="text" placeholder='Subjek' className='w-[588px] h-12 mb-3 rounded-lg p-4'/>
          <textarea  placeholder='Pesan' className='w-[588px] h-40 mb-3 rounded-lg p-4'></textarea>
          <button className='w-36 h-14 bg-primary-500 shadow-md rounded-lg'>Kirim</button>
        </div>
      </div>
    </div>
  )
}

export default Contact