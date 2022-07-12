import React from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

const Sidebar = (anchor) => {
    
     
    

    {/* onClick={toggleDrawer(anchor, false)}
onKeyDown={toggleDrawer(anchor, false)}*/}

  return (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 350 }}
      role="presentation"
     
    >
      <List sx={{backgroundColor:"#131921"}}>
              <div className="text-white p-2 ">
                  <p>Hello, Sparsh</p>
              </div>
      </List>
      <Divider />
      <List>
        
      </List>
    </Box>
  )
}

export default Sidebar