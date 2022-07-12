import React from 'react'


const Store = ({address,store_name,image,desc}) => {
  return (
    <div className='flex flex-col p-2 bg-white w-60 h-80 items-start shadow-lg justify-between rounded-md border-t transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 '>
            
      <img className="w-full h-52 object-contain flex items-center justify center" src={image} alt="" />
      <p className="text-left text-xm font-bold">{store_name}</p>
      <p className="text-left text-sm">{desc.substring(0, 25)}...</p>
      <p>{address}</p>
        </div>
  )
}

export default Store