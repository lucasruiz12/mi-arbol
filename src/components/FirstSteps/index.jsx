import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import logoArbol from '../../assets/logos/logo-TAO-white.svg';
import logoISO from '../../assets/logos/logo-ISO.svg';
import logoGreenHouse from '../../assets/logos/logo-green-house.svg';
import CarouselLogo from '../CarouselLogos';
import { tipsAndRecommendations } from '../../helpers/messagesAndTips';
import BackArrow from '../BackArrow';
import './style.css';

const FirstSteps = ({ setView }) => {

    const [showMessage, setShowMessage] = useState(false);
    const [currentMessage, setCurrentMessage] = useState("");


    useEffect(() => {
        if (showMessage) {
            setTimeout(() => {
                setShowMessage(false);
            }, 8000);
            // }, 1000000000);
        } else {
            if (currentMessage === "" || currentMessage === 3) {
                setCurrentMessage(0)
            } else {
                setCurrentMessage(currentMessage + 1)
            };
            setTimeout(() => {
                setShowMessage(true);
            }, 1000);
        };
    }, [showMessage]);

    return (
        <div className="container-steps-view">
            <BackArrow handleAction={() => setView(1)} />
            <div className="steps-content">
                <div className="steps-img-container">
                    <img className="steps-logo" src={logoArbol} alt="LOG" />
                    <div className="steps-logos">
                        <img src={logoGreenHouse} alt="NOIMG" className="logo-iso" />
                        <img src={logoISO} alt="NOIMG" className="logo-iso" />
                    </div>
                </div>
                {
                    currentMessage !== "" && showMessage &&
                    <p className="steps-tips">{tipsAndRecommendations[currentMessage].message}</p>
                }
                <div className="steps-info-container">
                    <div className="steps-text">
                        <p className="steps-line-text">El primer paso es medir el impacto de tu día a día, respondiendo unas simples preguntas que usaremos para determinar tu huella de carbono individual, apegándonos a los factores de emisión del protocolo internacional GHG.</p>
                    </div>
                </div>
                <Link className="link-btn" to="/initQuestions">
                    <button className="btn-green">
                        Medir mi huella
                    </button>
                </Link>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "5vh" }}>
                    <p className="steps-clients-title">Nuestros clientes</p>
                    <CarouselLogo />
                </div>
            </div>
        </div>
    );
};

export default FirstSteps;
