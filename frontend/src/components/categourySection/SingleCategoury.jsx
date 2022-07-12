import React from 'react'

/*207 409 */
const SingleCategoury = ({image,title}) => {
  return (
      <div className="w-[191px] h-[207px] bg-white p-2 flex flex-col items-center ">
          <img src={image} alt="" className="w-full h-[150px] object-contain" />
          <p className="font-bold text-center text-sm py-1">{title}</p>
      </div>
  )
}

export default SingleCategoury