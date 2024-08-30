import React from "react"
import logImg from "../assets/images/logo2.png"

import { NavLink } from "react-router-dom"
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";


export const Footer = () => {
  return (
    <>
 <section className='app w-4/5 m-auto rounded-lg shadow-shadow2 text-white flex flex-col items-center justify-center bg-blue-00 mt-16 relative z-10'>
  <div className='text-center p-10'>
    <h1 className='text-4xl font-semibold leading-tight text-purple-800'>
      Welcome to the Kids Learning Platform!
    </h1>
   
  </div>
  <div className='right w-full flex items-center px-5 rounded-r-lg rounded-bl-[500px] gap-8 bg-transparent md:bg-transparent md:p-8'>
    {/* You can add any additional child-friendly content here */}
  </div>
</section>


      <footer className='bg-[#F3F4F8] py-10 pt-32 -mt-24'>
        <div className='container grid grid-cols-4 gap-5 md:grid-cols-2'>
          <div className='logo'>
            <img src={logImg} alt='logImg' className='h-50' />
          </div>


<li className='flex flex-col items-center'>
  <div className='flex items-center gap-4'>
    <h4 className='text-black text-2xl font-semibold'>Subscribe</h4>
    <div className='flex gap-6'>
      <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
        <FaFacebookF size={24} className='text-blue-600 hover:text-blue-800' />
      </a>
     
      <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
        <FaInstagram size={24} className='text-pink-500 hover:text-pink-700' />
      </a>
    </div>
  </div>
  <div className='flex flex-col items-center gap-4 mt-5'>
    <NavLink to='#' className='text-[18px]'>
      About us
    </NavLink>
    <NavLink to='#' className='text-[18px]'>
      Contact
    </NavLink>
    <NavLink to='#' className='text-[18px]'>
      Reviews
    </NavLink>
    <NavLink to='#' className='text-[18px]'>
      Services
    </NavLink>
  </div>
</li>
        </div>
      </footer>
    </>
  )
}