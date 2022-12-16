import React, { useState } from 'react';
import ContactsButton from '../../UI/contactsButton/ContactsButton';
import ContactsInput from '../../UI/contactsInput/ContactsInput';
import ContactsTextarea from '../../UI/contactsTextarea/ContactsTextarea';
import { send } from 'emailjs-com';
import './style.scss'

const ContactsForm = () => {
    const [toSend, setToSend] = useState({
        name: '',
        message: '',
        email: '',
        phone: '',
    })

    const onSubmit = (e) => {
        e.preventDefault();
        if (toSend.name !== '' & toSend.name.length>2 & toSend.email.length>10 & toSend.phone !=='' & toSend.message !==''){
            send(
                'service_yix8c0m',
                'template_qmz1vwf',
                toSend,
                'd0kGDN-5WGmtGNaXd'
            ).then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setToSend({name:'', message:'', email:'', phone:''})
            })
                .catch((err) => {
                    console.log('FAILED...', err);
                });
        }
        
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };
   
    return (
        <form onSubmit={onSubmit} className='contacts-form'>
            <ContactsInput
                id='name'
                label='Ваше имя'
                type='text'
                name='name'
                value={toSend.name}
                onChange={handleChange}
            />
            <ContactsInput
                id='email'
                label='Ваша почта'
                type='email'
                name='email'
                value={toSend.email}
                onChange={handleChange} />

            <div className='contacts-form__textarea'>
                <ContactsTextarea
                    id='text'
                    label='Ваше сообщение'
                    type='text'
                    name='message'
                    value={toSend.message}
                    onChange={handleChange}
                />
            </div>
            <ContactsInput
                id='phone'
                label='Номер телефона'
                type='phone'
                name='phone'
                value={toSend.phone}
                onChange={handleChange} />
            <ContactsButton type='submit'>Отправить сообщение</ContactsButton>

        </form>
    );
};

export default ContactsForm;