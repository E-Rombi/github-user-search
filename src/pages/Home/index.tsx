import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../core/components/Button';
import './styles.scss';

const Home = () => {
    return(
        <div className="home-container">
            <div className="home-content">
                <h1 className="home-title">Desafio do Capítulo 3, <br/> Bootcamp DevSuperior</h1>
                <h3 className="home-subtitle">
                    Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior. <br/> <br/>
                    Favor observar as instruções passadas no capítulo sobre a elaboração <br/> deste projeto. <br/> <br/>
                    Este design foi adaptado a partir de Ant Design System for Figma, de <br/> Mateusz Wierzbicki: antforfigma@gmail.com
                </h3>
            </div>
            <div className="home-actions">
                <Link to="/search">
                    <Button text="Começar" />
                </Link>
            </div>
        </div>
    );
}

export default Home;