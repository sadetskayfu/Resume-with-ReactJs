import React from 'react';
import './style.scss'

const BurgerMenu = ({ children, visible, setVisible }) => {
    return (
        <div className={visible ? 'burger_menu_container active' : 'burger_menu_container'}
            onClick={() => setVisible(false)}>
            <div className={visible ? 'burger_menu_container__content active' : 'burger_menu_container__content'}
                onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default BurgerMenu;