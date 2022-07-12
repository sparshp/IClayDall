import React, { useState } from 'react'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Sidebar from "./Sidebar"






const BottomNav = () => {
  


  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  


    return (
      <>
        <div className="flex items-center px-3 bg-[#232F3E] text-white space-x-4 w-full">
        {['left'].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button sx={{ color: "white"}} onClick={toggleDrawer(anchor, true)}><MenuOutlinedIcon sx={{cursor: "pointer" }}/></Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
            {Sidebar(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
                
          <div className="hidden md:flex item-center w-7/12 justify-between">
              <a href=""><p>fasion</p></a> 
              <a href=""><p>fasion</p></a> 
              <a href=""><p>fasion</p></a> 
              <a href=""><p>fasion</p></a> 
              <a href=""><p>fasion</p></a> 
              <a href=""><p>fasion</p></a>
              <a href=""><p>fasion</p></a> 
              <a href=""><p>fasion</p></a> 
              <a href=""><p>fasion</p></a>
              <a href=""><p>fasion</p></a> 
            </div>
                
            </div>
            {/* { sidebar && <div className="w-96 bg-red-600 h-screen overflow-hidden absolute z-20" >
                <div className="flex items-center justify-between bg-[#232F3E] py-2 px-4 text-white">
                    <p>Hello, Sparsh</p>
                    <CloseOutlinedIcon onClick={hideSidebar} sx={{cursor: "pointer" }}/>
                </div> 
            </div>
            }*/}
            
            
            </>
  )
}

export default BottomNav