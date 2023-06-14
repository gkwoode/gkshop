import React, { useState } from 'react';
import { BsCart3 } from 'react-icons/bs';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { Box, Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText,  } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
// import { Link } from 'react-router-dom';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [
        {
            text: 'Home',
            icon: <HomeIcon />,
            link: '/',
        },
        {
            text: 'About',
            icon: <InfoIcon />,
            link: '/about',
        },
        {
            text: 'Testimonials',
            icon: <CommentRoundedIcon />,
            link: '/contact',
        },
        {
            text: 'Contact',
            icon: <PhoneRoundedIcon />,
            link: '/contact',
        },
        {
            text: 'Cart',
            icon: <ShoppingCartRoundedIcon />,
            link: '/cart',
        },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full flex px-8 pt-4 justify-between z-30">
            <div className=''>
                <p className="md:text-4xl ss:text-xl font-bold text-amber-500">gkshop</p>
            </div>
            <div class="gap-6 ss:hidden md:flex items-center md:font-bold">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Testimonials</a>
                <a href="">Contact</a>
                <a href="">
                    <BsCart3 />
                </a>
                <button className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full">
                    Shop Now
                </button>
            </div>
            <div>
                <HiOutlineBars3  onClick={() => setOpenMenu(true)}/>
            </div>
            <Drawer anchor='right' open={openMenu} onClose={() => setOpenMenu(false)}>
                <Box 
                sx={{ width: 250 }} 
                role="presentation" 
                onClick={() => setOpenMenu(false)}
                onKeyDown={() => setOpenMenu(false)} >
                    {menuOptions.map((item, index) => (
                        <ListItem key={index}>
                            <ListItemButton>
                                <ListItemIcon> {item.icon} </ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </Box>
            </Drawer>
        </nav>
    );
}

export default Navbar;
