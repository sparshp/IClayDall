import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import { Badge } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MidNav = () => {


  const quantity = useSelector(state => state.cart.quantity)
  

  return (
    <div className="mid_nav flex items-center justify-between px-3 h-[60px] text-white bg-[#131921] space-x-6 w-full sticky top-0 z-20">
      {/* Logo */}
      <div className="flex">
        <img src="" alt="" />
        <p className="text-3xl tracking-[.25em]">iClaydol</p>
      </div>
      {/*Search */}
      <div className="flex items-center bg-gray-100 py-2 px-4 space-x-3 rounded-md flex-1 ">
        <input type="text" placeholder="Search..." className="bg-transparent flex-1 outline-none text-black" />
        <SearchIcon sx={{ color: "gray", cursor: "pointer" }}/>
      </div>
       {/*Location*/}
      <div className="hidden md:flex justify-between w-4/12 px-4 space-x-6 h-10 items-center">
      <div className="">
        <div className="flex space-x-1">
          <p className="tect-xs">Deliver at</p>
          <LocationOnOutlinedIcon className="text-blue-300" />
        </div>
        <p className="font-semibold">Lucknow 226022</p>
      </div>
        <div>
          <Link to="/login">
        <p className="tect-xs">Hello, </p>
        <p className="font-semibold cursor-pointer">Account & List</p>
        </Link>
      </div>

      <div className="flex flex-col items-center">
        <img className="h-6 w-6 " src="./images/dealsIcon.png" alt="" />
        <p className="font-semibold">Deals</p>
        </div>
        <Link to="/cart">
        <div className="flex space-x-2 pt-2">
        <Badge badgeContent={quantity} color="secondary">
          <Inventory2OutlinedIcon size="large" sx={{height:"34px",width:"34px"}} />
        </Badge>
          <p className="pt-3">Cart</p>
          </div>
          </Link>
      
    </div>
  </div>
  )
}

export default MidNav