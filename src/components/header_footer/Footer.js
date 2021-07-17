import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Footer = () => {
    return (
        <footer className='bck_red'>
            <Fade triggerOnce delay={500}>
                <div className='font_righteous footer_logo_venue'>
                    The venue
                </div>
                <div classNme='footer_copyright'>
                    The Venue of 2021 &copy; All Rights Reserved.
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;
