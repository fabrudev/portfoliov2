import React from 'react';
import './ProjectsStyles.css';
import screen from '../assets/screen.png'

const Projects = () => {
    return (
        <div className='projects'>
            <div className="title-container">
                <div className="line"></div>
                <h3>Proyectos</h3>
                <div className="line"></div>
            </div>
            <div className="projects-container">
                <button className='projects-arrow-btns'><i className="fa-solid fa-caret-left"></i></button>
                <div className="project-container">
                    <div className="img-container">
                        <img src={screen} alt="screen" />
                    </div>
                    <a href='#' className="title">
                        <h4>Title</h4>
                        <i className="fa-solid fa-up-right-from-square"></i>
                    </a>
                    <p className='subtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aliquid id magnam repellendus, nam nostrum, ipsum aut quo magni quaerat, officia cum quasi labore culpa autem eligendi! Perferendis, itaque iusto.</p>
                    <div className="project-bottom">
                        <div className="project-technologies">
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>REACT</p>
                            <p>REDUX</p>
                            <p>API</p>
                        </div>
                        <button>Ver Más</button>
                    </div>
                </div>
                <button className='projects-arrow-btns'><i className="fa-solid fa-caret-right"></i></button>
            </div>
            <button className='projects-btn'>VER TODOS</button>
        </div>
    );
};

export default Projects;