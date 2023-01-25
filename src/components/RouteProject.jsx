import React from 'react';
import './RouteProjectStyles.css'

const RouteProject = (props) => {
    return (
        <div className='route-project'>
            <div className="img-container">
                <img src={props.img} alt="img" />
            </div>
            <a href={props.link} target='_blank' className="title">
                <h4>{props.title}</h4>
                <i className="fa-solid fa-up-right-from-square"></i>
            </a>
            <p>{props.techs}</p>
        </div>
    );
};

export default RouteProject;