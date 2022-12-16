import React from 'react';
import TitleSection from '../titleSection/TitleSection';
import './style.scss'
import htmlSkills from '../../assets/icons/skills/Html5.svg'
import cssSkills from '../../assets/icons/skills/Css3.svg'
import jquerySkills from '../../assets/icons/skills/Jquery.svg'
import JsSkills from '../../assets/icons/skills/JS.svg'
import mongoSkills from '../../assets/icons/skills/Mongo.svg'
import nodeSkills from '../../assets/icons/skills/Node.svg'
import reactSkills from '../../assets/icons/skills/React.svg'
import SkillsCard from '../skillsCard/SkillsCard';
import SkillRaitingsCard from '../skillRaitingsCard/SkillRaitingsCard';

const Skills = () => {
    const skillsData = [{
        icons: htmlSkills,
        alt: 'HTML5',
        title: 'HTML5',
        desc: 'Именно он создает каркас вашего сайта или приложения, а пятая версия позволит мне создавать более SEO-оптимизированную структуру вашего продукта',
    },
    {
        icons: cssSkills,
        alt: 'CSS3',
        title: 'CSS3',
        desc: 'Этот язык стилей позволяет мне создавать абсолютно любой внешний вид вашего сайта или приложения. Все ограничивается только вашей фантазией!',
    },
    {
        icons: JsSkills,
        alt: 'Java Script',
        title: 'Java Script',
        desc: 'Этот язык программирования позволяет оживить все что угодно: слайдеры, окна, подсказки, вкладки, получение данных от сервера и многое другое',
    },
    {
        icons: jquerySkills,
        alt: 'Jquery',
        title: 'Jquery',
        desc: 'Библиотека Jquery позволит ускорить разработку. Без необходимости интегрировать в проект мы её не будем, но навык работы с ней присутствует',
    },
    {
        icons: reactSkills,
        alt: 'React',
        title: 'React',
        desc: 'Эта библиотека позволяет создавать web-приложения. Мы можем создать максимально интерактивный продукт именно под ваши цели',
    },
    {
        icons: nodeSkills,
        alt: 'Node.js',
        title: 'Node.js',
        desc: 'Эта платформа позволяет создавать бэкенд для вашего продукта - “мозги”, которые будут выполнять действия, которые пользователь не видит',
    },
    {
        icons: mongoSkills,
        alt: 'Mongo.db',
        title: 'Mongo.db',
        desc: 'Это нереляционная база данных, которая будет хранить данные вашего сайта или приложения',
    },
    ]
    const skillsRaitData = [{ title: 'Создание сайтов', counter: '100%' },
    { title: 'Создание приложений', counter: '85%' },
    { title: 'Работа с данными', counter: '90%' },
    { title: 'Креативность', counter: '75%' },
    { title: 'Создание дизайна', counter: '90%' },
    { title: 'Soft skills', counter: '95%' },]
    return (
        <section id='skills' className='skills'>
            <div className='container'>
                <TitleSection title='Навыки' text='Чем я буду полезен' />
                <div className='skills__items'>
                    {skillsData.map(i => <SkillsCard key={i.title} {...i} />)}
                </div>
               <div className='skills__raitings'>
                    {skillsRaitData.map(i => <SkillRaitingsCard key={i.title} {...i} />)}
                </div>
            </div>
        </section>
    );
};

export default Skills;