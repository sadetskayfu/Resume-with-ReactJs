import React from 'react';
import { Link } from 'react-scroll'
import './style.scss'

const ButtonNavigation = ({ children, noBackground, titleLink }) => {
    return (
        <Link
            to={titleLink}
            smooth={true}
            duration={500}>
            <div className={noBackground ?
                'button_navigation active' :
                'button_navigation'}>
                {children}
            </div>
        </Link>
    );
};

export default ButtonNavigation;