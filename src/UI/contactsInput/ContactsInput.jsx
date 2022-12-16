import React from 'react';
import './style.scss'

const ContactsInput = ({ id, label, name, value, onChange }) => {
    return (
        <div className='contacts-container-input'>
            <input
                name={name}
                value={value}
                onChange={onChange}
                id={id} />
            <label className='title title_fz14' htmlFor={id}>{label}</label>
        </div>

    );
};

export default ContactsInput;