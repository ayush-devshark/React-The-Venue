import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SideDrawer from './SideDrawer';

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [headerShow, setHeaderShow] = useState(false);

    const toogleDrawer = value => {
        setDrawerOpen(value);
    };

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setHeaderShow(true);
        } else {
            setHeaderShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <AppBar
                position='fixed'
                style={{
                    backgroundColor: headerShow ? '#2f2f2f' : 'transparent',
                    boxShadow: 'none',
                    padding: '10px 0px',
                }}
            >
                <Toolbar>
                    <div className='header_logo'>
                        <div className='font_righteous header_logo_venue'>
                            The venue
                        </div>
                        <div classNme='header_logo_title'>Musical Events</div>
                    </div>

                    <IconButton
                        aria-label='Menu'
                        color='inherit'
                        onClick={() => toogleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <SideDrawer
                        open={drawerOpen}
                        onClose={value => toogleDrawer(value)}
                    />
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Header;
