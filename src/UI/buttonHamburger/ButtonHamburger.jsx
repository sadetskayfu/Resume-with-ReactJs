import React from 'react';
import './style.scss'

const ButtonHamburger = ({onClick}) => {
    return (
        <div onClick = {onClick} className='hamburger_button'>
            <span></span>
            <span className='long'></span>
            <span></span>
        </div>
    );
};

export default ButtonHamburger;