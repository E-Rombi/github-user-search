import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Navbar = () => (
    <nav className="navbar-container">
        <div className="navbar-content">
            <Link to="/"><h1>Bootcamp DevSuperior</h1></Link>
        </div>
    </nav>
)


export default Navbar;