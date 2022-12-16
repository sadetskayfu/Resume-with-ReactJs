import React from 'react';
import './style.scss'

const ContactsTextarea = ({ id, label, name, value, onChange }) => {
    return (
        <div className='contacts-container-textarea'>
            <textarea name={name}
                value={value}
                onChange={onChange}
                id={id} />
            <label for={id}>{label}</label>
        </div>
    );
};

export default ContactsTextarea;