import React from 'react';
import AboutMe from '../pages/AboutMe';
import HomePage from '../pages/HomePage';
import Projects from '../pages/Projects';
import Technologies from '../pages/Technologies';

const Home = () => {
    return (
        <>
            <HomePage />
            <AboutMe />
            <Technologies />
            <Projects />
        </>
    );
};

export default Home;