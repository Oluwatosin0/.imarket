import React from 'react'
import arrow from '../image/arrow_forward.png';
import { Link } from 'react-router-dom';


function Vdetails() {
  return (
    <div className='md:p-16 md:m-20 overflow-hidden p-10 m-8'>
          <form >
            <h1 className='text-center font-semibold mt-20'>Verify account</h1>
            <p className='text-xs text-center text-gray-400 pb-8'>enter the 6-digit code that was sent to <span className='text-gray-500 font-bold'>username@gmail.com</span></p>
            <input className='w-72 h-10 flex md:ml-96 ml-10 border-solid -mb-6 border-2 rounded-md px-4 text-xs  'type='text' placeholder='Enter code'/>
            <input type='text' className='w-72 h-10  md:ml-96 ml-10 border-solid border-2 bg-[#053161] rounded-md mt-12  mr-4'/>
            <p className='text-xs  ml-24 mr-24 text-center font-medium -mt-7 text-white'>Verify my account</p>
            <p className='mt-8 ml-8 text-center mb-40 text-xs text-gray-500'>Didn't recieve any code?<span className='text-[#FF6A34] font-bold text-xs ml-1'>Resend</span></p>
            <Link to= '/signup' className='text-xs font-semibold md:ml-96 ml-8 pl-40  text-center'>Go back</Link>
            <img className=' md:ml-96 ml-10 -mt-5 pl-32' src={arrow} alt='arrow' />
          </form>
          </div>
  )
}

export default Vdetails