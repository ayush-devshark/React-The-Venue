import React, { useState, useEffect } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import MyButton from '../utils/MyButton';

const Discount = () => {
    const end = 30;

    const [start, setStart] = useState(0);

    const porcentage = () => {
        if (start < end) {
            setStart(prevCount => prevCount + 1);
        }
    };

    useEffect(() => {
        if (start > 0 && start < end) {
            setTimeout(() => {
                setStart(prevCount => prevCount + 1);
            }, 30);
        }
    }, [start, end]);

    return (
        <div className='center_wrapper'>
            <div className='discount_wrapper '>
                <Fade
                    onVisibilityChange={inView => {
                        if (inView) {
                            porcentage();
                        }
                    }}
                >
                    <div className='discount_porcentage'>
                        <span>{start}%</span>
                        <span>OFF</span>
                    </div>
                </Fade>

                <Slide right>
                    <div className='discount_description'>
                        <h3>Purchase ticket before 20th june</h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Voluptates nemo amet repellendus dignissimos
                            natus? Dolorem, officiis? Temporibus perspiciatis
                            explicabo libero laudantium nisi, earum ab facere
                            maxime, voluptatem placeat accusamus? Sapiente?
                        </p>
                        <MyButton
                            text='Purchase tickets'
                            link='https://www.arianagrande.com/'
                            size='small'
                            style={{
                                backgroundColor: '#ffa800',
                                color: '#fff',
                            }}
                            iconTicket={true}
                        />
                    </div>
                </Slide>
            </div>
        </div>
    );
};

export default Discount;
