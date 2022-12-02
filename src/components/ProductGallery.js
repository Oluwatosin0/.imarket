import React from 'react';
import products from '../data';
import popular from '../popular';
import ProductItem from './ProductItem';
import vehicle from '../image/vehicle.png';
import property from '../image/property.png';
import sports from '../image/sports.png';
import services from '../image/services.png';
import kids from '../image/kids.png';
import electronics from '../image/Electronics.png';
import fashion from '../image/fashion.png';
import beauty from '../image/beauty.png';
import foods from '../image/foods.png';
import games from '../image/games.png';
import home from '../image/Home.png';
import Jobs from '../image/Jobs.png';
import arrow from '../image/arrow_black.png';
import arrows from '../image/arrow-white.png';
import div from '../image/div.png';
import orange from '../image/orange.png';
import img from '../image/image.5.png';
                


function ProductGallery() {
  return (
    <div className='md:flex md:justify-evenly md:gap-30 inline-block '>
        <div className='bg-white h-2/5 mt-5 mb-80 w-60 '>
            <h2 className='my-8 mx-4 font-bold shadow-md'>CATEGORIES</h2>
            <ul className='font-bold mb-2'>
            <li className='flex justify-between items-center  text-sm mt-2 p-2'>
                <div className='flex items-center gap-4'>
									<img className='-mt-2'src={vehicle} alt='vehicle'/>
									<p>Vehicles</p>
                </div>
                <img src={arrow} className="w-6 h-6" alt="arr"/>
            </li>
						<li className='flex justify-between items-center text-sm mt-2 p-2'>
                <div className='flex items-center gap-4'>
									<img className='-mt-2'src={property} alt="games"/>
									<p>Property</p>
                </div>
                <img src={arrow} className="w-6 h-6" alt="arr"/>
            </li>
            <li className='flex justify-between items-center text-sm mt-2 p-2'>
                <div className='flex items-center gap-4'>
									<img className='-mt-2'src={electronics} alt="electronics" />
									<p>Electronics</p>
                </div>
                <img src={arrow} className="w-6 h-6" alt="arr"/>
            </li>
            <li className='flex justify-between items-center text-sm mt-2 p-2'>
                <div className='flex items-center gap-4'>
									<img className='-mt-2'src={Jobs} alt="Jobs" />
									<p>Jobs</p>
                </div>
                <img src={arrow} className="w-6 h-6" alt="arr"/>
            </li>
            <li className='flex justify-between items-center text-sm mt-2 p-2'>
                <div className='flex items-center gap-4'>
									<img className='-mt-2'src={home} alt="appliances"/>
									<p>Home Appliances</p>
                </div>
                <img src={arrow} className="w-6 h-6" alt="arr"/>
            </li>
            <li className='flex justify-between items-center text-sm mt-2 p-2'>
                <div className='flex items-center gap-4'>
									<img className='-mt-2'src={sports} alt="sports"/>
									<p>Sports</p>
                </div>
                <img src={arrow} className="w-6 h-6" alt="arr"/>
            </li>
            <li className='flex justify-between items-center text-sm mt-2 p-2'>
                <div className='flex items-center gap-4'>
									<img className='-mt-2'src={games} alt="games"/>
									<p>Games</p>
                </div>
                <img src={arrow} className="w-6 h-6" alt="arr"/>
            </li>
						<li className='flex justify-between items-center text-sm mt-2 p-2'>
                <div className='flex items-center gap-4'>
									<img className='-mt-2'src={beauty} alt="beauty"/>
									<p>Beauty & Health</p>
                </div>
                <img src={arrow} className="w-6 h-6" alt="arr"/>
            </li>
						<li className='flex justify-between items-center text-sm mt-2 p-2'>
                <div className='flex items-center gap-4'>
									<img className='-mt-2'src={foods} alt="foods" />
									<p>Foods</p>
                </div>
                <img src={arrow} className="w-6 h-6" alt="arr"/>
            </li>
						<li className='flex justify-between items-center text-sm mt-2 p-2'>
                <div className='flex items-center gap-4'>
									<img className='-mt-2'src={fashion} alt="fashion" />
									<p>Fashion</p>
                </div>
                <img src={arrow} className="w-6 h-6" alt="arr"/>
            </li>
						<li className='flex justify-between items-center text-sm mt-2 p-2'>
                <div className='flex items-center gap-4'>
									<img className='-mt-2'src={services} alt="services"/>
									<p>Services</p>
                </div>
                <img src={arrow} className="w-6 h-6" alt="arr"/>
            </li>
						<li className='flex justify-between items-center text-sm mt-2 p-2'>
                <div className='flex items-center gap-4'>
									<img className='-mt-2'src={kids} alt="kids"/>
									<p>Kids</p>
                </div>
                <img src={arrow} className="w-6 h-6" alt="arr"/>
            </li>
            </ul>
        </div>

        <div className='flex flex-col items-center justify-center space-y-20'>
				< div className='flex md:flex-row flex-col items-center justify-between md:mt-10 -mt-60 w-full space-x-10'>
    	<div className='relative h-50'>
				<img className=' rounded-md h-72'src={div} alt='div'/>
        <h1 className='font-semibold text-5xl absolute md:w-full w-72 md:top-24 top-16 left-10 text-white'>How to <span className='text-[#FF6A34] '>Buy</span> & <span className='text-[#FF6A34]'>Sell</span></h1>
        <p className='font-semibold text-5xl absolute w-42 md:top-36 top-40 left-10 text-white'>on iMarket</p>
        <p className='absolute text-xs font-semibold text-white bottom-6 left-10 flex '>Click Here <img className=''src={arrows} alt='arr'/></p>
        </div>
        
				<div className=' relative md:h-50 mt-5  ' >
				<img className=' h-72'src={img} alt='div'/>
        <h1 className='font-semibold text-5xl absolute md:top-24 top-16 left-10 text-white'>Discount</h1>
        <p className='font-semibold text-sm absolute md:top-36 top-40 left-10 text-white'>on orders over 100k</p>
        <p className='absolute text-xs font-semibold text-white bottom-10 left-10 flex '>Shop Now <img classname='mb-4'src={arrows} alt='arr'/></p>
				</div>
		
			 </div>

        <div >
            <div className='-mt-10'>
                <h3 className='font-bold text-2xl'>Explore Popular Brands <span className='text-[#FF6A34] flex text-xs justify-end '>SEE ALL <img className='p-2 -mt-1' src={orange} alt='orn'/></span> </h3>
                <div className=' flex justify-around md:justify-evenly'>{popular.map((item) =>{
                    return <img src={item.url} key={item.id}  alt={item.name} name={item.name} price={item.price}/>
                })}
								</div>
								<div className='flex md:justify-around justify-between font-medium mb-6'>
								<p >Toyota</p>
								<p >Samsung</p>
								<p >Nivea</p>
								<p >Adidas</p>
								<p >Apple</p>
								<p>Honda</p>
								</div>
            </div>

            <div>
                <h3 className='font-bold text-2xl'>Daily Deals<span className='text-orange-600 flex text-xs justify-end '>SEE ALL <img className='p-2 -mt-1' src={orange} alt='orn'/></span></h3>
								<div className='flex md:justify-around justify-between font-medium  mb-6'>
								<p className='bg-gray-200 p-2 text-xs rounded-lg font-bold'>Phones</p>
								<p className='bg-gray-200 p-2 text-xs rounded-lg font-bold'>Vehicles</p>
								<p className='bg-gray-200 p-2 text-xs rounded-lg font-bold'>Fashions</p>
								<p className='bg-gray-200 p-2 text-xs rounded-lg font-bold'>Electronics</p>
								<p className='bg-gray-200 p-2 text-xs rounded-lg font-bold'>Appliances</p>
								<p className='bg-gray-200 p-2 text-xs rounded-lg font-bold'>Beauty & Health</p>
								<p className='bg-gray-200 p-2 text-xs rounded-lg font-bold'>Sports</p>
								<p className='bg-gray-200 p-2 text-xs rounded-lg font-bold'>Games</p>
								</div>
                <div className='grid grid-cols-4 gap-11'>{products.map((clip) =><ProductItem
                    key = {clip.id}
                    name = {clip.name}
                    url ={clip.url}
                    location={clip.location}
                    price = {clip.price}
                    category ={clip.category}
                    /> )}
										</div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ProductGallery