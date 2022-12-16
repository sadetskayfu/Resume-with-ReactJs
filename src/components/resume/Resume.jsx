import React from 'react';
import ExpirensCard from '../expirensCard/ExpirensCard';
import TitleSection from '../titleSection/TitleSection';
import './style.scss'
import university from '../../assets/icons/expirens/University.svg'
import developer from '../../assets/icons/expirens/Developer.svg'
import courses from '../../assets/icons/expirens/Courses.svg'
import designer from '../../assets/icons/expirens/Designer.svg'

const Resume = () => {
    const educationData = [{
        title: 'Udemy',
        desc: 'Курсы по Web-разработке',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo. ',
        icons: courses,
        alt: 'Courses',
    },
    {
        title: 'МГТУ им. Н. Э. Баумана',
        desc: 'Диплом магистра | Москва (2014-2020)',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo. ',
        icons: university,
        alt: 'University',
    },]
    const expirensData = [
        {
            title: 'Front-End Developer',
            desc: 'EPAM | Москва (2018-2019)',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo. ',
            icons: developer,
            alt: 'Developer',
        },
        {
            title: 'UI/UX Designer',
            desc: 'Squad Team | Москва (2018)',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo. ',
            icons: designer,
            alt: 'Designer',
        }]
    return (
        <section id='resume' className='resume'>
            <div className='container'>
                <TitleSection title='Опыт' text='Чем я буду полезен' />
                <div className='resume__wrapper'>
                    <div className='resume__left resume__column'>
                        <h3 className='resume__title title title_fz20'>Образование</h3>
                        {educationData.map(i => <ExpirensCard key={i.title} {...i} />)}
                    </div>
                    <div className='resume__right resume__column'>
                        <h3 className='resume__title title title_fz20'>Опыт работы</h3>
                        {expirensData.map(i => <ExpirensCard key={i.title} {...i} />)}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;