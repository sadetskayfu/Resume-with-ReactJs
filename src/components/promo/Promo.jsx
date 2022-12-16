import React, { useState } from 'react';
import ButtonNavigation from '../../UI/buttonNavigation/ButtonNavigation';
import instagram from '../../assets/icons/social/Instagram.svg'
import facebook from '../../assets/icons/social/Facebook.svg'
import github from '../../assets/icons/social/Github.svg'
import closeMenu from '../../assets/icons/Close.svg'
import './style.scss'
import ButtonHamburger from '../../UI/buttonHamburger/ButtonHamburger';
import BurgerMenu from '../../UI/burgerMenu/BurgerMenu';
import ItemMenu from '../../UI/itemMenu/ItemMenu';
import ArrowUp from '../../UI/arrowUp/ArrowUp';
import { SOCIAL_LINK } from '../../constant/socialLinks';

const Promo = () => {
    const menuItem = [
        { title: 'ПРО МЕНЯ', titleLink: 'about-me' },
        { title: 'МОЙ ОПЫТ', titleLink: 'resume' },
        { title: 'МОИ НАВЫКИ', titleLink: 'skills' },
        { title: 'МОИ РАБОТЫ', titleLink: 'portfolio' },
        { title: 'ПРАЙС-ЛИСТ', titleLink: 'prise-list' },
        { title: 'КОНТАКТЫ', titleLink: 'contacts' },]
    const [visibleMenu, setVisibleMenu] = useState(false)

    return (
        <div>
            <ArrowUp titleLink = 'home'/>
            <div className='burger_button'>
                <ButtonHamburger onClick={() => setVisibleMenu(true)} />
            </div>
            <BurgerMenu visible={visibleMenu} setVisible={setVisibleMenu}>
                <MenuContent setVisibleMenu={setVisibleMenu} menuItem={menuItem} />
            </BurgerMenu>
            <AsidePanel />
            <section id='home' className='promo'>
                <div className='container'>
                    <div className='title title_fz16 promo__subtitle'>Меня зовут Ярослав Исаков</div>
                    <h1 className='title title_fz48 promo__title'>Я web-разработчик из города Слуцк</h1>
                    <div className='promo__btns'>
                        <ButtonNavigation titleLink='portfolio'>Портфолио</ButtonNavigation>
                        <ButtonNavigation titleLink='about-me' noBackground={true}>Про меня</ButtonNavigation>
                    </div>
                </div>
            </section>
        </div>
    );
};

const AsidePanel = () => {
    return (
        <aside className='sidepanel'>
            <div className='sidepanel__text'>Социальные сети</div>
            <div className='sidepanel__divider'></div>
            <a href={SOCIAL_LINK.INSTAGRAM} className='sidepanel__link' >
                <img src={instagram} alt='instagram'></img></a>
            <a href={SOCIAL_LINK.GIT_HUB} className='sidepanel__link'  >
                <img src={github} alt='github'></img></a>
            <a href={SOCIAL_LINK.FACEBOOK} className='sidepanel__link' >
                <img src={facebook} alt='facebook'></img></a>
        </aside>
    )
}

const MenuContent = ({ setVisibleMenu, menuItem }) => {
    return (
        <div className='menu_content'>
            <img className='menu_content__close' onClick={() => setVisibleMenu(false)} src={closeMenu} />
            <nav>
                <ul  className='menu_content__items'>
                    {menuItem.map(i => <li key={i.title} ><ItemMenu
                        onClick={setVisibleMenu}
                        titleLink={i.titleLink}>
                        {i.title}
                    </ItemMenu></li>)}
                </ul>
            </nav>
            <div className='menu_content__social'>
                <a href={SOCIAL_LINK.INSTAGRAM} className='menu_content__link' >
                    <img src={instagram} alt='instagram'></img></a>
                <a href={SOCIAL_LINK.GIT_HUB} className='menu_content__link'  >
                    <img src={github} alt='github'></img></a>
                <a href={SOCIAL_LINK.FACEBOOK} className='menu_content__link' >
                    <img src={facebook} alt='facebook'></img></a>
            </div>
        </div>
    )
}

export default Promo;