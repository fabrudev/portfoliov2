import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarStyles.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <p>Fabru-<span>Dev</span></p>
            <a href="mailto:fabrizarateok@gmail.com">Enviar email</a>
        </div>
    );
};

export default Navbar;