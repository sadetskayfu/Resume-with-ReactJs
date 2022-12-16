import React from 'react';
import './style.scss'
import photo from './../../assets/images/Photo.jpg'
import photoMini from './../../assets/images/Photo-mini.jpg'
import design from '../../assets/icons/aboutSkils/Design.svg'
import phone from '../../assets/icons/aboutSkils/Phone.svg'
import web from '../../assets/icons/aboutSkils/Web.svg'

const AboutMe = () => {
    const skilsCardData = [{
        title: 'Web-разработка',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        alt: 'Web-разработка',
        icons: web
    },
    {
        title: 'Разработка приложений',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        alt: 'Разработка приложений',
        icons: phone
    },
    {
        title: 'UI/UX Design',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        alt: 'UI/UX Design',
        icons: design
    }]

    return (
        <section id='about-me' className='about_me'>
            <div className='container'>
                <div className='about_me__wrapper'>
                    <div className='about_me__photo'>
                        <picture>
                            <source media="(max-width: 992px)" srcSet={photoMini}/>
                            <source media="(min-width: 993px)" srcSet={photo}/>
                            <img src={photo} alt='photo' />
                        </picture>
                    </div>
                    <div className='about_me__info'>
                        <h2 className='title title_fz16 about_me__subtitle'>Про меня</h2>
                        <div className='title title_fz36 about_me__title'>Меня зовут Ярослав</div>
                        <div className='divider'></div>
                        <p className='title about_me__text title_fz14'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                    <div className='about_me__skills'>
                        {skilsCardData.map(i => <AboutSkilsCard key={i.title} {...i} />)}
                    </div>
                </div>
            </div>
        </section>
    );
};

const AboutSkilsCard = ({title, text, icons, alt}) => {
    return (
        <div className='skils_card_container'>
            <div className='skils_card_container__left'>
                <div className='skils_card_container__subtitle'><img  src = {icons} alt = {alt}/></div>
            </div>
            <div className='skils_card_container__right'>
                <div className='skils_card_container__title title title_fz14'>{title}</div>
                <p className='skils_card_container__text title title_fz12'>{text}</p>
            </div>
        </div>
    );
};

export default AboutMe;