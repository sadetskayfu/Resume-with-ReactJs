import React from 'react';
import { Link } from 'react-scroll'
import './style.scss';

const ItemMenu = ({ children, titleLink, onClick }) => {
    return (
        <Link
            onClick={() => onClick(false)}
            to={titleLink}
            smooth={true}
            duration={500}
        >
            <div className='menu-item-wrapper'>
                {children}
            </div>
        </Link>

    );
};

export default ItemMenu;