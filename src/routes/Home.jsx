import React from 'react';
import './HomeStyles.css'
import memoji from '../assets/memoji.png'

const Home = () => {
    return (
        <div className='home'>
            <img src={memoji} alt="memoji" />
            <div className="text-container">
                <h2>Hola, soy</h2>
                <h1>Fabrizio Zarate</h1>
                <h3>Desarrollador Frontend</h3>
            </div>
            <a className='button'>Descargar CV</a>
        </div>
    );
};

export default Home;