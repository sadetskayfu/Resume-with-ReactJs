import React from 'react';
import './style.scss'

const ContactsButton = ({isValid, children, ...props}) => {
    return (
        <button disabled={!isValid} {...props} className={isValid? 'contacts-button' : 'contacts-button active'}>
            {children}
        </button>
    );
};

export default ContactsButton;