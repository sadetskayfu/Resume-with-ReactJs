import React from 'react';
import TitleSection from '../titleSection/TitleSection';
import uber from '../../assets/images/portfolio/uber.jpg'
import pulse from '../../assets/images/portfolio/pulse.jpg'
import bread from '../../assets/images/portfolio/bread.jpg'
import plans from '../../assets/images/portfolio/plans.jpg'
import ipad from '../../assets/images/portfolio/ipad.jpg'
import mac from '../../assets/images/portfolio/mac.jpg'
import { PORTFOLIO_LINK } from '../../constant/portfolioLinks';
import './style.scss'

const Portfolio = () => {
    return (
        <section id = 'portfolio' className='portfolio'>
            <div className='container'>
                <TitleSection title='Портфолио' text='Мои работы' />
                <div className='portfolio__items'>
                    <a className='portfolio__item' href={PORTFOLIO_LINK.FIRST_PROJECT}><img src={uber} alt='uber' /></a>
                    <a className='portfolio__item' href={PORTFOLIO_LINK.FIRST_PROJECT}><img src={pulse} alt='pulse' /></a>
                    <a className='portfolio__item' href={PORTFOLIO_LINK.FIRST_PROJECT}><img src={bread} alt='bread' /></a>
                    <a className='portfolio__item vertical' href={PORTFOLIO_LINK.FIRST_PROJECT}><img src={plans} alt='plans' /></a>
                    <a className='portfolio__item' href={PORTFOLIO_LINK.FIRST_PROJECT}><img src={ipad} alt='ipad' /></a>
                    <a className='portfolio__item horizontal' href={PORTFOLIO_LINK.FIRST_PROJECT}><img src={mac} alt='mac' /></a>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;