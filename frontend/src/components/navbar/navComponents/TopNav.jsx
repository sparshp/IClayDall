import React from 'react'
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const TopNav = () => {
  return (
    <div className="upper_nav flex w-full border-b items-center justify-between px-3 bg-white">
        <div className="flex items-center">
          <IconButton className="h-6 w-6">
            <FacebookIcon size="small" sx={{height:'18px',color:'blue'}} />
          </IconButton>
          <IconButton className="h-6 w-6">
            <TwitterIcon size="small" sx={{height:'18px',color:'#1DA1F2'}}/>
          </IconButton>
          <IconButton className="h-6 w-6">
            <InstagramIcon size="small" sx={{height:'18px',color:'#E1306C'}}/>
          </IconButton>
          <IconButton className="h-6 w-6">
          <LinkedInIcon size="small" sx={{height:'18px',color:'#1DA1F2'}}/>
        </IconButton>
        </div>
        <div>
          <div className="flex space-x-4 items-center">
            <p>email</p>
            <div className="flex items-center space-x-2 px-2 border-x">
              <img src="./images/india 1.png" alt="" />
              <p className="text-sm">india</p>
              <KeyboardArrowDownIcon size="small" />
            </div>
            <p className="text-sm">+91-9506224666</p>
          </div>
        </div>
      </div>
  )
}

export default TopNav