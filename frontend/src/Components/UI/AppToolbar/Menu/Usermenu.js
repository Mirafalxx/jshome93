import { Button, Menu, MenuItem } from '@material-ui/core'
import React, { useState } from 'react'

const Usermenu = () => {
    const [anchorEl,setAnchorEl]=useState(null);
    const name='Maxim';
    

    const handleClick=event=>{
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
      };
    return (
        <>
            <Button onClick={handleClick} color='inherit'> Welcome ,{name}</Button>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem>Profile</MenuItem>
                <MenuItem>My Account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </>
    )
}

export default Usermenu
