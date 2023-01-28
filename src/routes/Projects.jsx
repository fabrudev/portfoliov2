import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectsStyles.css';
import RouteProject from '../components/RouteProject';
import pokedex from '../assets/projects-images/pokedex.png';
import landing from '../assets/projects-images/landing-page.png';
import pricing from '../assets/projects-images/pricing.png';
import miniPortfolio from '../assets/projects-images/miniportfolio.png';
import weather from '../assets/projects-images/weather.png';
import rickAndMorty from '../assets/projects-images/rickandmorty.png';


const Projects = () => {

    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    }

    return (
        <div className="projects-route">
            <div className='navbar-projects'>
                <i onClick={goToHome} className="fa-solid fa-reply"></i>
                <p onClick={goToHome}>Inicio</p>
            </div>
            <div className="title-container">
                <div className="line"></div>
                <h3>Proyectos</h3>
                <div className="line"></div>
            </div>
            <div className="projects-route-container">
                <RouteProject 
                    img= {pokedex}
                    title= 'Pokédex'
                    link= 'https://pokedex-fabrudev.netlify.app'
                    techs= 'HTML CSS REACT REDUX API'
                />
                <RouteProject 
                    img= {landing}
                    title= 'Landing Page'
                    link= 'https://landingpage-fabrudev.netlify.app'
                    techs= 'HTML CSS REACT'
                />
                <RouteProject 
                    img= {pricing}
                    title= 'Pricing Page'
                    link= 'https://pricingpage-fabrudev.netlify.app'
                    techs= 'HTML CSS REACT'
                />
                <RouteProject 
                    img= {miniPortfolio}
                    title= 'Mini Portfolio'
                    link= 'https://miniportfolio-fabrudev.netlify.app/'
                    techs= 'HTML CSS REACT'
                />
                <RouteProject 
                    img= {weather}
                    title= 'Weather App'
                    link= 'https://weatherappv2-fabrudev.netlify.app'
                    techs= 'HTML CSS REACT API'
                />
                <RouteProject 
                    img= {rickAndMorty}
                    title= 'Rick & Morty Wiki'
                    link= 'https://rickandmortywiki-fabrudev.netlify.app'
                    techs= 'HTML CSS REACT API'
                />
            </div>
        </div>
    );
};

export default Projects;