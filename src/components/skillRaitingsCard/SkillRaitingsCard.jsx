import React from 'react';
import './style.scss'

const SkillRaitingsCard = ({title, counter}) => {
    return (
        <div className='skill-raitings-card'>
            <div className='skill-raitings-card__title title title_fz14'>{title}</div>
            <div className='skill-raitings-card__counter title title_fz14'>{counter}</div>
            <div className='skill-raitings-card__line'>
                <span style={{width: counter}}></span>
            </div>
        </div>
    );
};

export default SkillRaitingsCard;