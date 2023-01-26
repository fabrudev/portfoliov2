import React from 'react';
import Navbar from '../components/Navbar';
import AboutMe from '../pages/AboutMe';
import HomePage from '../pages/HomePage';
import ProjectsPage from '../pages/ProjectsPage';
import Technologies from '../pages/Technologies';

const Home = () => {
    return (
        <>
            {/*<div className="App">
                <Navbar />
            </div>*/}
            <HomePage />
            <AboutMe />
            <Technologies />
            <ProjectsPage />
        </>
    );
};

export default Home;