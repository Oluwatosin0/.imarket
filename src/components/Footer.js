import React from 'react';
import logo1 from "../image/logo1.png";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className=' bg-black md:px-20 px-6  md:text-sm text-xs text-center text-white h-80 mt-40'>
        <div className='flex justify-between pt-10 ' >
        <div>
            <ul className='list-none my-1'>
           <li className='my-4 text-left'><Link to='/' className='text-white no-underline '>Home</Link></li>
           <li className='my-4 text-left'><Link to='/Trending Products' className='text-white no-underline'>Trending Products</Link></li>
           <li className='my-4 text-left'><Link to='/Contact Us' className='text-white no-underline'>Contact Us</Link></li>
           <li className='my-4 text-left'><Link to='/Vendors' className='text-white no-underline'>Vendors</Link></li> 
            </ul>
        </div>
        <div>
            <img className='ml-8'src={logo1} alt='logo1'/>
            <p className='text-white'>Reach Globally, Interact Locally</p>
        </div>
        <div>
        <ul className='list-none my-1'>
           <li className='my-4 text-right'><Link to='/Privacy Policy' className='text-white no-underline'>Privacy Policy</Link></li>
           <li className='my-4 text-right'><Link to='/Safety Tips' className='text-white no-underline'>Safety Tips</Link></li>
           <li className='my-4 text-right'><Link to='/FAQs' className='text-white no-underline'>FAQs</Link></li>
           <li className='my-4 text-right'><Link to='/Forum' className='text-white no-underline'>Join Forum</Link></li>
           <li className='my-4  text-right'><Link to='/Terms and Conditions' className='text-white no-underline'>Terms and Conditions</Link></li> 
            </ul>
        </div>
        </div>
        <p className='text-white text-center md:mt-8 mt-14'>Designed by <span className='text-orange-600'>Hertechtrail Academy Cohort5 Capstone Project</span></p>
        
        </div>
  )
}

export default Footer
