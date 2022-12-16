import React from 'react';
import './style.scss'

const SkillsCard = ({icons, title, desc, alt}) => {
    return (
        <div className='skills_card_container'>
            <div className=''>
                <img src={icons} alt={alt}/>
            </div>
            <h3 className='title title_fz14 skills_card_container__title'>{title}</h3>
            <p className='title title_fz12 skills_card_container__desc'>{desc}</p>
        </div>
    );
};

export default SkillsCard;