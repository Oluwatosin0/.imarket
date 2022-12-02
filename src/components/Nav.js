import React from 'react';
import logo from "../image/logo.png";
import {FaSearch} from "react-icons/fa";
import {FiHelpCircle} from "react-icons/fi";
import { Link } from 'react-router-dom';


function Nav() {
  return (
    <div className='flex  md:justify-between flex-row md:p-3 w-full shadow-md bg-white'>
        <img className='md:ml-10 ml-2'src={logo} alt="logo" />
        <FaSearch  className='relative md:-ml-4 md:-mr-20 mt-3 -mr-3 text-gray-200'/>
        <input type="text" placeholder='Search for anything' className='md:w-72 w-36 border-solid border-2 bg-white border-gray rounded-md px-5 mt-1 md:px-12 text-xs -ml-2 md:mr-4'/>
        <Link to= '/' className='text-black font-bold ml-4 mt-2 text-xs md:text-sm md:ml-80 '>Home</Link>
        <FiHelpCircle className='md:relative absolute md:ml-20 ml-96   md:-mr-32 mt-2 '/>
        <Link to= '/' className='text-black md:ml-70  ml-4 mt-2 font-bold text-xs md:text-sm '>Help</Link>
        <Link to= '/login'className='bg-[#FF6A34] py-2  md:w-20 w-16  border-none rounded-md md:mr-20 ml-12 text-white text-xs text-center'>Get started</Link>
    </div>
  )
}

export default Nav