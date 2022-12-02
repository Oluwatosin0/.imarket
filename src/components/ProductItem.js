import React from 'react'

function productItem(props) {
  return (
    <div>
        <img src={props.url} alt={props.name}/>
        <p className='text-gray-500'>{props.name}</p>
        <p className='text-gray-500'>{props.location}</p>
        <p className='text-sm font-bold text-black'>{props.price}</p>
    </div>
  )
}

export default productItem