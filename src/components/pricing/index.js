import React from 'react';
import MyButton from '../utils/MyButton';
import { Zoom } from 'react-awesome-reveal';

const Pricing = () => {
    const priceState = {
        prices: [100, 150, 200],
        position: ['Balcony', 'Medium', 'Star'],
        description: [
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, ipsam? Tempora, ea eligendi vero numquam laboriosam iure aut!',
            'Porem ipsum dolor sit amet consectetur adipisicing elit. Animi, ipsam? Tempora, ea eligendi vero numquam laboriosam iure aut!',
            'Korem ipsum dolor sit amet consectetur adipisicing elit. Animi, ipsam? Tempora, ea eligendi vero numquam laboriosam iure aut!',
        ],
        linkTo: [
            'https://www.arianagrande.com/',
            'https://www.arianagrande.com/',
            'https://www.arianagrande.com/',
        ],
        delay: [500, 0, 500],
    };

    const showBoxes = () =>
        priceState.prices.map((item, i) => (
            <Zoom key={i} className='pricing_item' delay={priceState.delay[i]}>
                <div className='pricing_inner_wrapper'>
                    <div className='pricing_title'>
                        <span>${priceState.prices[i]}</span>
                        <span>{priceState.position[i]}</span>
                    </div>
                    <div className='pricing_description'>
                        {priceState.description[i]}
                    </div>
                    <div className='pricing_buttons'>
                        <MyButton text='Purchase' link={priceState.linkTo[i]} />
                    </div>
                </div>
            </Zoom>
        ));

    return (
        <>
            <div className='bck_black'>
                <div className='center_wrapper pricing_section'>
                    <h2>Pricing</h2>

                    <div className='pricing_wrapper'>{showBoxes()}</div>
                </div>
            </div>
        </>
    );
};

export default Pricing;
