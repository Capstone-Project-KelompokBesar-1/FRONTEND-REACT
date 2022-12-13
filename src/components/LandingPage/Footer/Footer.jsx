import React from 'react'
import {AiOutlineTwitter, AiFillYoutube, AiFillLinkedin, AiFillInstagram} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='h-52 bg-gradient-to-r from-primary-500 to-web-blue text-white'>
      <div className='flex justify-end'>
        <div className='mx-20'>
          <p>sosial media :</p>
          <div className='flex flex-row mt-4'>
            <Link className='border-white border-2 rounded-full mr-6'><AiOutlineTwitter className='h-12 w-12 p-2'/></Link>
            <Link className='border-white border-2 rounded-full mr-6'><AiFillYoutube className='h-12 w-12 p-2'/></Link>
            <Link className='border-white border-2 rounded-full mr-6'><AiFillLinkedin className='h-12 w-12 p-2'/></Link>
            <Link className='border-white border-2 rounded-full mr-6'><AiFillInstagram className='h-12 w-12 p-2'/></Link>
            <Link className='border-white border-2 rounded-full'><FaFacebookF className='h-12 w-12 p-2'/></Link>
          </div>
        </div>
      </div>
      <hr className='mt-10' />
      <p className='mt-6 ml-12'>&copy; 2022 - Ourgym</p>
    </div>
  )
}

export default Footer