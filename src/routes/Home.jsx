import React from 'react';
import Navbar from '../components/Navbar';
import AboutMe from '../pages/AboutMe';
import Contact from '../pages/Contact';
import HomePage from '../pages/HomePage';
import ProjectsPage from '../pages/ProjectsPage';
import Technologies from '../pages/Technologies';

const Home = () => {
    return (
        <>
            <div className="App">
                <Navbar />
            </div>
            <HomePage />
            <AboutMe />
            <Technologies />
            <ProjectsPage />
            <Contact />
        </>
    );
};

export default Home;