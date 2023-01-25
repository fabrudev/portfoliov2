import React, { useState } from 'react';
import './ProjectsPageStyles.css';
import ecommerce from '../assets/projects-images/ecommerce.png';
import pokedex from '../assets/projects-images/pokedex.png';
import landingPage from '../assets/projects-images/landing-page.png';
import Project from '../components/Project';
import Projects from '../routes/Projects';
import { useNavigate } from 'react-router-dom';

const ProjectsPage = () => {

    const navigate = useNavigate();
    const [ counter, setCounter ] = useState(0);

    const projectImage = [ecommerce, pokedex, landingPage];
    const projectTitle = ['E-Commerce', 'Pokédex', 'Landing Page'];
    const projectLink = [
        'https://store-fabrudev.netlify.app/',
        'https://pokedex-fabrudev.netlify.app/',
        'https://landingpage-fabrudev.netlify.app'
    ]
    const projectTechnologies = [
        'HTML CSS REACT REDUX API',
        'HTML CSS REACT REDUX API',
        'HTML CSS REACT'
    ];

    const next = () => {
        if (counter === 2) {
            setCounter(0)
        } else {
            setCounter(counter+1)
        }
    }

    const back = () => {
        if (counter === 0) {
            setCounter(2)
        } else {
            setCounter(counter-1)
        }
    }

    const goToProjects = () => {
        navigate('/proyectos');
    }
    
    console.log(counter);

    return (
        <div className='projects'>
            <div className="title-container">
                <div className="line"></div>
                <h3>Proyectos</h3>
                <div className="line"></div>
            </div>
            <div className="projects-all-container">
                <div className="projects-container">
                    <button onClick={back} className='projects-arrow-btns'><i className="fa-solid fa-caret-left"></i></button>
                    <div className="project-container project-not-responsive">
                        <div className="img-container">
                            <img src={projectImage[counter]} alt="screen" />
                        </div>
                        <a href={projectLink[counter]} target='_blank' className="title">
                            <h4>{projectTitle[counter]}</h4>
                            <i className="fa-solid fa-up-right-from-square"></i>
                        </a>
                        <div className="project-bottom">
                            <div className="project-technologies">
                                <p>{projectTechnologies[counter]}</p>
                            </div>
                            <button>Ver Más</button>
                        </div>
                    </div>
                    <Project 
                        img={projectImage[1]} 
                        title={projectTitle[1]}
                        link={projectLink[1]}
                        technologies={projectTechnologies[1]}
                    />
                    <Project 
                        img={projectImage[2]} 
                        title={projectTitle[2]}
                        link={projectLink[2]}
                        technologies={projectTechnologies[2]}
                    />
                    <button onClick={next} className='projects-arrow-btns'><i className="fa-solid fa-caret-right"></i></button>
                </div>
                <button className='projects-btn' onClick={goToProjects}>VER TODOS</button>
            </div>
        </div>
    );
};

export default ProjectsPage;