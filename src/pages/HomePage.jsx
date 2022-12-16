import React from 'react';
import AboutMe from '../components/aboutMe/AboutMe';
import Contacts from '../components/contacts/Contacts';
import Portfolio from '../components/portfolio/Portfolio';
import PriseList from '../components/priseList/PriseList';
import Promo from '../components/promo/Promo';
import Resume from '../components/resume/Resume';
import Skills from '../components/skills/Skills';

const HomePage = () => {
    return (
        <div>
            <Promo />
            <AboutMe />
            <Resume />
            <Skills />
            <Portfolio />
            <PriseList />
            <Contacts />
        </div>
    );
};

export default HomePage;