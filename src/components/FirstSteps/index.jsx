import React from 'react';
import { Link } from 'react-router-dom';
import stepsVideo from '../../assets/videos/2. Mundo.mp4';
import stepsVideoMobile from '../../assets/videos/2. Mundo mobile.mp4';
import logoArbol from '../../assets/logos/logo-TAO-white.svg';
import logoISO from '../../assets/logos/logo-ISO-white.svg';
import CarouselLogo from '../CarouselLogos';
import ButtonStyledMain from '../ButtonStyledMain';
import './style.css'

const FirstSteps = ({ setView }) => {
    return (
        <div className="container-steps-view">
            <video autoPlay muted loop className="steps-video">
                <source src={window.innerWidth <= 768 ? stepsVideoMobile : stepsVideo} type="video/mp4" />
            </video>
            <div className="steps-content">
                <div className="steps-img-container">
                    <img onClick={() => setView(1)} className="steps-logo" src={logoArbol} alt="LOG" />
                    <img src={logoISO} alt="NOIMG" className="logo-iso" />
                    {/* <h2 className="steps-title">El primer paso</h2> */}
                </div>
                <div className="steps-info-container">
                    <div className="steps-text">
                        <p className="steps-line-text">El primer paso es medir el impacto de tu día a día respondiendo unas simples preguntas que usaremos para determinar tu huella de carbono individual, apegándonos a los factores de emisión del <b>IPCC</b> y el <b>protocolo internacional de GHG.</b></p>
                    </div>
                    {/* <div className="logo-iso-container">
                        <img src={logoISO} alt="NOIMG" className="logo-iso" />
                    </div> */}
                </div>
                <Link className="link-btn" to="/initQuestions">
                    <div className="steps-btn-container">
                        <ButtonStyledMain text="Medir mi huella" />
                        {/* <button className="btn-green">
                        Medir mi huella
                    </button> */}
                    </div>
                </Link>
                <CarouselLogo />
            </div>
        </div>
    );
};

export default FirstSteps;
