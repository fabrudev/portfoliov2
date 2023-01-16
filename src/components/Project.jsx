import React from 'react';
import '../pages/ProjectsStyles.css'

const Project = (props) => {
    return (
        <div className="project-container project-responsive">
            <div className="img-container">
                <img src={props.img} alt="screen" />
            </div>
            <a href={props.link} target='_blank' className="title">
                <h4>{props.title}</h4>
                <i className="fa-solid fa-up-right-from-square"></i>
            </a>
            <div className="project-bottom">
                <div className="project-technologies">
                    <p>{props.technologies}</p>
                </div>
                <button>Ver Más</button>
            </div>
        </div>
    );
};

export default Project;