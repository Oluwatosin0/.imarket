import React from 'react';
import google from '../image/google.png';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ProductGallery from '../components/ProductGallery';
import ProductItem from '../components/ProductItem';


 function Home() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div className='bg-gray-100 overflow-hidden '>
       <Nav/>
       <input  className='w-full px-6  rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-none'
       onMouseEnter={() => setShowModal(true)}
       ></input>
        <ProductGallery/>
    <ProductItem />
    <Footer />
      {showModal ? (
        <>
  <div className="justify-center backdrop-blur-sm items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
  <div className="relative w-auto my-6 max-w-sm hover:border-transparent border-2">
  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
  <div className="flex justify-end">
          
    <button
     className="text-gray-300 background-transparent font-bold px-6 py-2 text-sm outline-none focus:outline-none"
     type='button'
      onClick={() => setShowModal(false)}
      >
        X
      </button>
                </div>
                <div className=" w-full h-40 px-4 py-10 border-b border-solid rounded-t">
                  <h1 className="text-md text-center w-full mb-1 -mt-14 font-semibold">
                    Login to chat with the seller</h1>
                  <img src={google} alt='' className=' absolute ml-28 mt-5 w-5'/>
            <input type='text' className='w-72 h-10 ml-6 border-solid -mt-40 pb-10 border-2 bg-gray-300 rounded-md '/>
            <p className='text-xs ml-36 font-medium -mt-8'>Login with Google</p>
            <input type='text' className='relative w-72 h-10 ml-6 border-solid border-2 bg-[#053161] rounded-md mt-6   '/>
            <p><Link to= '/login' className='absolute text-xs -mt-8 ml-36 font-medium text-white'>Login</Link></p>
            <p className='mt-4 mb-2 ml-8 text-center text-xs text-gray-500'>Don't have an account?<Link to= '/signup'className='text-[#FF6A34] font-bold text-xs ml-1'>Create account</Link></p>
                </div>
              </div>
            </div>
          </div>
          
        </>
      ) : null}
    </div>
  );
}
    <div className='bg-gray-100 overflow-hidden '>
   
   
    </div>

export default Home
  


