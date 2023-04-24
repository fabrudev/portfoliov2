import React from 'react'
import './HomePageStyles.css'
import memoji from '../assets/memoji.png'
import cv from '../assets/cv.pdf'

const HomePage = () => {
  return (
        <div className='home'>
            <img src={memoji} alt="memoji" />
            <div className="text-container">
                <h2>Hola, soy</h2>
                <h1>Fabrizio Zarate</h1>
                <h3>Desarrollador Frontend</h3>
            </div>
            <a className='button' download='' href={cv}>Descargar CV</a>
        </div>
  )
}

export default HomePage
