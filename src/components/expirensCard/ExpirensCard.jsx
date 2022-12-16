import React from 'react';
import './style.scss'

const ExpirensCard = ({icons, title, desc, text, alt}) => {
    return (
        <div className='expirens_card_container'>
            <div className='expirens_card_container__icons'><img src={icons} alt={alt}/></div>
            <div className='expirens_card_container__title title title_fz14'>
                <h4>{title}</h4>
                <div className='expirens_card_container__desc'>{desc}</div>
            </div>
            <p className='expirens_card_container__text title title_fz12'>{text}</p>
        </div>
    );
};

export default ExpirensCard;