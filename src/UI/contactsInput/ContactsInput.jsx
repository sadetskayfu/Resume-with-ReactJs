import React from 'react';
import './style.scss'

const ContactsInput = ({ register, id, label, errors, ...props }) => {
    return (
        <div className={errors ? 'contacts-container-input active' : 'contacts-container-input'}>
            <input
                {...register}
                {...props}
                id={id} />
            <label className='title title_fz14' htmlFor={id}>{label}</label>
            <div className='message-error title_fz14'>
                {errors?.message}
            </div>
        </div>

    );
};

export default ContactsInput;