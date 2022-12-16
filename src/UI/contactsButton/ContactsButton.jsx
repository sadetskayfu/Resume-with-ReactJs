import React from 'react';
import './style.scss'

const ContactsButton = ({children}, props) => {
    return (
        <button {...props} className='contacts-button'>
            {children}
        </button>
    );
};

export default ContactsButton;