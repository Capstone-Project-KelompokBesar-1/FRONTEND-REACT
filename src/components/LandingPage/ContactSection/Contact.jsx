import React from 'react'

const Contact = () => {
  return (
    <div className='h-screen bg-gradient-to-r from-primary-500 to-web-blue text-white'>
      <h2 className='text-center font-avenirBlack'>Kontak</h2>
      <div className='flex'>
        <ul>
          <li><img src="" alt="" /><p>Jalan Puntadewa, Nomor 23, Karangbesuki, Kota Malang, Jawa Timur. 65146.</p></li>
          <li><img src="" alt="" /><p>0813-2222-8686</p></li>
          <li><img src="" alt="" /><p>Ourgym@officialgymindonesia</p></li>
        </ul>
        <div>
          <input type="text" placeholder='Nama' />
          <input type="email" placeholder='Email' />
          <input type="text" placeholder='Subjek' />
          <textarea  placeholder='Pesan'></textarea>
          <button>Kirim</button>
        </div>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15804.631965068473!2d112.62205652411063!3d-7.982614408013226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd628181bac60c7%3A0xe71f0ef69b3810b4!2sAlun-Alun%20Kota%20Malang!5e0!3m2!1sid!2sid!4v1670519088021!5m2!1sid!2sid" title='mapsWeb'></iframe>
    </div>
  )
}

export default Contact