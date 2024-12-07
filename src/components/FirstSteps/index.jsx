import React from 'react';
import { Link } from 'react-router-dom';
import stepsVideo from '../../assets/videos/2. Mundo.mp4';
import logoArbol from '../../assets/logos/logo-TAO-white.svg';
import logoISO from '../../assets/logos/logo-ISO.svg';
import './style.css'
import CarouselLogo from '../CarouselLogos';

const FirstSteps = ({ setView }) => {
    return (
        <div className="container-steps-view">
            <video autoPlay muted loop className="steps-video">
                <source src={stepsVideo} type="video/mp4" />
            </video>
            <div className="steps-content">
                <div className="steps-img-container">
                    <img onClick={() => setView(1)} className="steps-logo" src={logoArbol} alt="LOG" />
                    {/* <h2 className="steps-title">El primer paso</h2> */}
                </div>
                <div className="steps-info-container">
                    <div className="steps-text">
                        <p className="steps-line-text">El primer paso es medir el impacto de tu día a día respondiendo unas simples preguntas que usaremos para determinar tu huella de carbono individual, apegándonos a los factores de emisión del <b>IPCC</b> y el <b>protocolo internacional de GHG.</b></p>
                    </div>
                    <div className="logo-iso-container">
                        <img src={logoISO} alt="NOIMG" className="logo-iso" />
                    </div>
                </div>
                <Link className="link-btn" to="/initQuestions">
                    <button className="btn-green">
                        Medir mi huella
                    </button>
                </Link>
                <CarouselLogo />
            </div>
        </div>
    );
};

export default FirstSteps;
