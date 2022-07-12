import React from 'react'
import Rating from '@mui/material/Rating';


const Product = ({ image, title, desc,address }) => {
  return (
    <div className='flex flex-col p-2 m-4 w-auto bg-white items-start shadow-lg justify-between rounded-md border-t transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 '>
    <img className="w-full object-contain flex items-center justify center" src={image} alt="" />
      <p className="text-left text-xm font-bold py-1">{title.substring(0, 30)}...</p>
      <div className="flex items-center space-x-3">
        <p className="text-xl font-bold">₹ 235</p>
        <p className='text-sm line-through'>₹ 400</p>
        <p className='text-sm text-red-600'>(30% off)</p>
      </div> 
      <p className="text-left text-sm py-1 text-gray-400">{desc.substring(0, 100)}</p>
      <div className="flex items-center justify-between w-full">
        <Rating name="read-only" value={3} readOnly size="small" />
        <p className="text-xs text-gray-500">{address }</p>
      </div>
</div>
  )
}

export default Product