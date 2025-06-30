import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoArbol from '../../assets/logos/logo-mas-raices.png';
import logoISO from '../../assets/logos/logo-ISO.svg';
import logoGreenHouse from '../../assets/logos/logo-green-house.svg';
import CarouselLogo from '../CarouselLogos';
import { tipsAndRecommendations } from '../../helpers/messagesAndTips';
import BackArrow from '../BackArrow';
import './style.css';

const FirstSteps = ({ setView }) => {
    const [showMessage, setShowMessage] = useState(false);
    const [currentMessage, setCurrentMessage] = useState('');

    useEffect(() => {
        if (showMessage) {
            setTimeout(() => {
                setShowMessage(false);
            }, 8000);
        } else {
            if (currentMessage === '' || currentMessage === 3) {
                setCurrentMessage(0);
            } else {
                setCurrentMessage(currentMessage + 1);
            }
            setTimeout(() => {
                setShowMessage(true);
            }, 1000);
        }
    }, [showMessage]);

    return (
        <div className="container-steps-view container-fluid h-100">
            <BackArrow handleAction={() => setView(1)} />
            {currentMessage !== '' && showMessage && (
                <p className="steps-tips">{tipsAndRecommendations[currentMessage].message}</p>
            )}
            <div className="steps-content row h-100 ms-md-4 align-content-around">
                <div className="steps-img-container col-12 d-flex justify-content-md-between justify-content-center align-items-center">
                    <img
                        className="steps-logo"
                        src={logoArbol}
                        alt="Logo de Más Raíces, Menos Huella"
                    />
                </div>
                <div className="steps-info-container d-flex justify-content-between col-12">
                    <div className="steps-text col-12 col-md-8 col-lg-6">
                        <p className="steps-line-text">
                            El primer paso que debes dar es medir los gases de efecto invernadero que generas en tu vida diaria.
                        </p>
                        <p className="steps-line-text">
                            Contestando unas preguntas muy sencillas y apegándonos a los factores de emisión del <i>Protocolo Internacional GHG</i>, podemos determinar un cálculo preciso de cuanto debemos mitigar para ser carbon neutro.
                        </p>
                    </div>
                    <div className="steps-logos gap-4">
                        <img
                            src={logoGreenHouse}
                            alt="Logo de Green House Protocol"
                            className="logo-green-house"
                        />
                        <img src={logoISO} alt="Logo de ISO" className="logo-iso" />
                    </div>
                </div>
                <div className="col-12 col-md-5 col-lg-4 d-flex flex-column align-items-center">
                    <Link className="link-btn btn btn-green w-100 mb-2" to="/initQuestions">
                        Medir mi huella
                    </Link>
                    <p className="text-white mb-0">
                        ¿Tienes una cuenta?{' '}
                        <Link className="text-blue" to="/loginForm">
                            Inicia sesión
                        </Link>
                    </p>
                </div>
                <div className="col-12 d-flex flex-column align-items-center">
                    <p className="steps-clients-title">Nuestros clientes</p>
                    <CarouselLogo />
                </div>
            </div>
        </div>
    );
};

export default FirstSteps;