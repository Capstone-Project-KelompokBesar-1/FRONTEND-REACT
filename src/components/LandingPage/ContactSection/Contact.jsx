import React from 'react'
import iconLocation from '../../../assets/icons/location-white.svg'
import iconPhone from '../../../assets/icons/phone.svg'
import iconMail from '../../../assets/icons/mail.svg'

const Contact = () => {
  return (
    <div className='h-[1200px] bg-gradient-to-r from-primary-500 to-web-blue text-white'>
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
      <iframe className='w-[1159px] h-[468px] rounded-lg flex mx-auto mt-24' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15804.631965068473!2d112.62205652411063!3d-7.982614408013226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd628181bac60c7%3A0xe71f0ef69b3810b4!2sAlun-Alun%20Kota%20Malang!5e0!3m2!1sid!2sid!4v1670519088021!5m2!1sid!2sid" title='mapsWeb'></iframe>
    </div>
  )
}

export default Contact