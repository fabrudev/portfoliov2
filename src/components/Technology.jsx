import React from 'react';
import './TechnologyStyles.css'

const Technology = (props) => {
    return (
        <div className="technology">
            <div className="face front">
                <img src={props.img} alt="html-icon" />
            </div>
            <div className="face back">
                <p>{props.title}</p>
            </div>
        </div>
    );
};

export default Technology;