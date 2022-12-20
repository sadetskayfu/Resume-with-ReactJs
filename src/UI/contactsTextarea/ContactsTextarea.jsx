import React from 'react';
import './style.scss'

const ContactsTextarea = ({ register, id, label, ...props }) => {
    return (
        <div className='contacts-container-textarea'>
            <textarea
                {...register} 
                {...props}
                id={id} />
            <label for={id}>{label}</label>
        </div>
    );
};

export default ContactsTextarea;