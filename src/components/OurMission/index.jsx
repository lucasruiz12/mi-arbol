import React from 'react';
import misionVideo from '../../assets/videos/1. hojas.mp4';
import logoArbol from '../../assets/icons/logo-cuadrado.svg';
import './style.css';

const OurMission = ({ setView }) => {
    return (
        <div className="container-mission-view">
            <video autoPlay muted loop className="mission-video">
                <source src={misionVideo} type="video/mp4" />
            </video>
            <div className="mission-content">
                <img className="mission-logo" src={logoArbol} alt="LOG" />
                <h2 className="mission-title">Nuestra misión</h2>
                <div className="mission-text">
                    <p className="mission-line-text">Es ayudar a compensar las huellas de carbono que generas en tu vida diaria.</p>
                    <p className="mission-line-text">Forma parte de nuestras reforestaciones masivas y ayúdanos de la forma que mejor te acomode.</p>
                </div>
                <button className="btn-green" onClick={() => setView(2)}>
                    Empezar
                </button>
            </div>
        </div>
    );
};

export default OurMission;