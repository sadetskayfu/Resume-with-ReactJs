import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import ContactsButton from '../../UI/contactsButton/ContactsButton';
import ContactsInput from '../../UI/contactsInput/ContactsInput';
import ContactsTextarea from '../../UI/contactsTextarea/ContactsTextarea';
import { send } from 'emailjs-com';
import './style.scss'

const ContactsForm = () => {
    const requiredValue = 'Это поле обязательное'
    const schema = yup.object().shape({
        name: yup
            .string()
            .matches(/^([^0-9]*)$/, 'Имя не должно содержать цифр')
            .min(2, 'Имя не должно быть короче двух символов')
            .max(20, 'Имя не должно быть длинее 20 символов')
            .required(requiredValue),
        email: yup
            .string()
            .email('Не валидный Email адресс')
            .required(requiredValue),
        message: yup
            .string(),
        phone: yup
            .string()
            .required(requiredValue),
    })

    const { register, handleSubmit, reset, formState: {
        errors,
        isValid,
    } } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema),
    })

    const onSubmit = (data) => {
        send(
            'service_yix8c0m',
            'template_qmz1vwf',
            data,
            'd0kGDN-5WGmtGNaXd'
        ).then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            reset()
        })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    }

    const normalizePhoneNumber = (value) => {
        const phoneNumber = parsePhoneNumberFromString(value)
        if (!phoneNumber) {
            return value
        }
        return (
            phoneNumber.formatInternational()
        )
    }

    return (
        <form noValidate onSubmit={handleSubmit(onSubmit)} className='contacts-form'>
            <ContactsInput
                register={register('name')}
                errors={errors.name}
                id='name'
                label='Ваше имя'
                type='text'
            />
            <ContactsInput
                register={register('email')}
                errors={errors.email}
                id='email'
                label='Ваша почта'
                type='email'
            />

            <div className='contacts-form__textarea'>
                <ContactsTextarea
                    register={register('message')}
                    id='message'
                    label='Ваше сообщение'
                    type='text'
                />
            </div>
            <ContactsInput
                register={register('phone')}
                errors={errors.phone}
                id='phone'
                label='Номер телефона'
                type='tel'
                onChange={(event) => {
                    event.target.value = normalizePhoneNumber(event.target.value)
                }}
            />
            <ContactsButton isValid={isValid} type='submit'>Отправить сообщение</ContactsButton>
        </form>
    );
};

export default ContactsForm;