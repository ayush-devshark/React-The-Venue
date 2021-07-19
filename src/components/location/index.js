import React from 'react';

const Location = () => {
    return (
        <div className='location_wrapper'>
            <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.8888971144834!2d-0.14422818422974515!3d51.51525427963651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ad554c335c1%3A0xda2164b934c67c1a!2sOxford%20St%2C%20London%2C%20UK!5e0!3m2!1sen!2sin!4v1626689080126!5m2!1sen!2sin'
                width='100%'
                height='500px'
                frameBorder='0'
                title='gglemaps'
                allowfullscreen
            ></iframe>

            <div className='location_tag'>
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;
