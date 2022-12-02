import React from 'react'
import { Carousel } from 'react-carousel-minimal';
import item2 from '../image/item2.png';
import item from '../image/item1.png';


function carousel() {
  
    /*<div className='  w-full h-80 max-w-3xl'>
    <Carousel   className='grid grid-cols-2 relative'>
        <div className='w-full h-80 absolute max-w-3xl transition duration-0.5 ease-in'>
            <img className='w-full h-full object-cover z-10'src={item} alt='item1'/>
        </div>
        <div className='w-full h-80 absolute max-w-3xl transition duration-0.5 ease-in'>
            <img className='w-full h-full object-cover' src={item2} alt='item2'/>
        </div>
    </Carousel>
</div>*/

 
  return (
    <div  className='relative'>
  <div className='relative w-full  float-left overflow-hidden'>
      <img src={item} className='block' alt='itm1'/>
      <img src={item2} className='block w-full' alt='itm2' />
    </div>
    
  <button
    className='absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0'>
    <span className='inline-block bg-no-repeat' ></span>
    <span className='visually-hidden'>Previous</span>
  </button>
  <button
    className='absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0'>
    <span className='carousel-control-next-icon inline-block bg-no-repeat'></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

  )
          }

export default carousel