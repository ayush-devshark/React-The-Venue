import React from 'react';
import Button from '@material-ui/core/Button';

import TicketIcon from '../../images/icons/ticket.png';

const MyButton = props => {
    return (
        <Button
            href={props.link}
            variant='contained'
            size={props.size ? props.size : 'large'}
            style={{
                backgroundColor: '#8e8e8e',
                color: '#fff',
                ...props.style,
            }}
        >
            {props.iconTicket && (
                <img src={TicketIcon} alt='icon button' className='iconImage' />
            )}
            {props.text}
        </Button>
    );
};

export default MyButton;
