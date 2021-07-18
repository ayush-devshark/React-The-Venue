import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import icon_calender from '../../images/icons/calendar.png';
import icon_location from '../../images/icons/location.png';

const VenueInfo = () => {
    return (
        <div className='bck_black'>
            <div className='center_wrapper'>
                <div className='vn_wrapper'>
                    <Zoom className='vn_item'>
                        <div>
                            <div className='vn_outer'>
                                <div className='vn_inner'>
                                    <div className='vn_icon_square bck_red'></div>
                                    <div
                                        className='vn_icon'
                                        style={{
                                            background: `url(${icon_calender})`,
                                        }}
                                    ></div>
                                    <div className='vn_title'>
                                        Event Date & Time
                                    </div>
                                    <div className='vn_desc'>
                                        Oct 20 @1:20 PM
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Zoom>

                    <Zoom className='vn_item' delay={500}>
                        <div>
                            <div className='vn_outer'>
                                <div className='vn_inner'>
                                    <div className='vn_icon_square bck_yellow'></div>
                                    <div
                                        className='vn_icon'
                                        style={{
                                            background: `url(${icon_location})`,
                                        }}
                                    ></div>
                                    <div className='vn_title'>London, U.K</div>
                                    <div className='vn_desc'>Oxford Street</div>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                </div>
            </div>
        </div>
    );
};

export default VenueInfo;
