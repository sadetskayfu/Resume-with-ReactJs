import React from 'react';
import TitleSection from '../titleSection/TitleSection';
import './style.scss'

const PriseList = () => {
    const priseData = [{
        title:'Landing-page',
        prise:'от 8000 руб.',
        desc:'Одностраничный сайт для презентации услуг/товаров/...',
    },
    {
        title:'Корпоративный сайт',
        prise:'от 20000 руб.',
        desc:'Сайт для вашего бизнеса или компании',
    },
    {
        title:'Интернет-магазин',
        prise:'от 30000 руб.',
        desc:'Инструмент для ваших продаж в сети',
    },
    {
        title:'Web-приложение',
        prise:'от 28000 руб.',
        desc:'Приложение внутри браузера для лучшего комфорта',
    },
    {
        title:'Android/IOS Приложение',
        prise:'от 25000 руб.',
        desc:'Приложение для смартфона любой ОС',
    },
    {
        title:'Дизайн',
        prise:'Индивидуально',
        desc:'Создам дизайн для вашего сайта/приложения...',
    },
]
    return (
        <section id='prise-list' className='prise-list'>
            <div className='container'>
                <TitleSection title='Прайс-лист'/>
                <div className='prise-list__items'>
                    {priseData.map(i => <PriseListCard key={i.title} {...i}/>)}
                </div>
            </div>
        </section>
    );
};

const PriseListCard = ({title, desc, prise}) => {
    return (
        <div className='prise-card'>
            <div className='prise-card__title title title_fz14'>{title}</div>
            <div className='prise-card__prise title title_fz14'>{prise}</div>
            <div className='prise-card__desc title_fz12'>{desc}</div>
        </div>
    )
}

export default PriseList;