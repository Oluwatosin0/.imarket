import React from 'react'
import flag from '../image/flag.png';
import {FaEye} from "react-icons/fa";
import item from '../image/item1.png';
import { Link } from 'react-router-dom';


function signupdetail() {
  return (
    <div className='md:flex md:justify-between overflow-hidden'>
          <img className=' relative max-h-fit mt-2 md:flex hidden'src={item} alt=''/>
          <form className='md:p-16 md:m-20 m-14 p-10'>
            <h1 className='text-center font-bold'>Welcome to iMarket</h1>
            <p className='text-xs text-center text-gray-400 pb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          
            <input className='w-72 h-10 md:ml-14 ml-3  border-solid border-2  rounded-md px-4 text-xs  'type='text' placeholder='Enter full name'/>
            <input className='w-72 h-10 md:ml-14 ml-3 border-solid border-2 mt-8 rounded-md px-14 text-xs  'type='text' placeholder='Enter phone number'/>
             <p className='text-xs font-bold md:ml-20 ml-9 -mt-11'><img className='-mb-4 -ml-4 mt-4'src={flag} alt='flag'/> +234</p>
            <input className='w-72 h-10 md:ml-14 ml-3 border-solid border-2 mt-12 rounded-md px-4 text-xs  'type='text' placeholder='Enter email address'/>
            <input className='w-72 h-10 md:ml-14 ml-3 border-solid border-2 mt-8 rounded-md px-4 text-xs  'type='text' placeholder='Enter password'/>
            <FaEye className='relative md:ml-80 ml-64 -mt-7 text-gray-400'/>
            <input type='text' className='w-72 h-10 md:ml-14 ml-3 border-solid border-2 bg-[#053161] rounded-md mt-12  mr-4'/>
            <p className='text-xs md:ml-40 ml-28 font-medium -mt-7 text-white'><Link to= '/verify'>Create Account</Link></p>
            <p className='mt-14 ml-8 text-center text-xs text-gray-500'>Have an account?<Link to= '/login'className='text-[#FF6A34] font-bold text-xs ml-1'>Login</Link></p>
            
            
          </form>
          </div>
  )
}

export default signupdetail