import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import slide_one from '../../images/slide_one.jpg';
import slide_two from '../../images/slide_two.jpg';
import slide_three from '../../images/slide_three.jpg';

const Caraousel = () => {
    const settings = {
        dots: false,
        infine: true,
        autoplay: true,
        speed: 500,
    };

    return (
        <div
            className='carrousel_wrapper'
            style={{ height: `${window.innerHeight}px` }}
        >
            <Slider {...settings}>
                <div>
                    <div
                        className='carraousel_image'
                        style={{
                            backgroundImage: `url(${slide_one})`,
                            backgroundSize: 'cover',
                            height: `${window.innerHeight}px`,
                        }}
                    ></div>
                </div>
                <div>
                    <div
                        className='carraousel_image'
                        style={{
                            backgroundImage: `url(${slide_two})`,
                            backgroundSize: 'cover',
                            height: `${window.innerHeight}px`,
                        }}
                    ></div>
                </div>
                <div>
                    <div
                        className='carraousel_image'
                        style={{
                            backgroundImage: `url(${slide_three})`,
                            backgroundSize: 'cover',
                            height: `${window.innerHeight}px`,
                        }}
                    ></div>
                </div>
            </Slider>
        </div>
    );
};

export default Caraousel;
