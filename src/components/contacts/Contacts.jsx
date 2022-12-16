import React from 'react';
import './style.scss'
import photo from '../../assets/images/Photo.jpg'
import instagram from '../../assets/icons/contacts/Instagram.svg'
import telegram from '../../assets/icons/contacts/Telegram.svg'
import facebook from '../../assets/icons/contacts/Facebook.svg'
import ContactsForm from '../contactsForm/ContactsForm';
import { SOCIAL_LINK } from '../../constant/socialLinks';

const Contacts = () => {
    return (
        <section id='contacts' className='contacts'>
            <div className='container'>
                <div className='contacts__wrapper'>
                    <div className='contacts__left'>
                        <img src={photo} alt='photo' />
                    </div>
                    <div className='contacts__right'>
                        <h2 className='title title_fz16 contacts__title'>Контакты</h2>
                        <div className='title title_fz36 contacts__subtitle'>Свяжитесь со мной</div>
                        <div className='divider'></div>
                        <div className='title title_fz14 contacts__text'>Любым удобным для вас способом:</div>
                        <div className='contacts__social'>
                            <a href={SOCIAL_LINK.INSTAGRAM}><img src={instagram} /></a>
                            <a href={SOCIAL_LINK.TELEGRAM}><img src={telegram} /></a>
                            <a href={SOCIAL_LINK.FACEBOOK}><img src={facebook} /></a>
                        </div>
                        <div className='title title_fz14 contacts__text'>Или оставьте ваши данные и я сам вам напишу:</div>
                        <div className='contacts__form-container'>
                            <ContactsForm/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;