import React from 'react';
import './style.scss'

const TitleSection = ({title, text}) => {
    return (
        <div className='title_section_container'>
            <div className='title_section_container__mixin'></div>
            <h2 className='title title_fz16'>{title}</h2>
            <div className='title title_fz36 title_section_container__text'>{text}</div>
            <div className='divider title_section_container__divider'></div>
        </div>
    );
};

export default TitleSection;