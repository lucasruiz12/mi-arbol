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
        <div className="container-fluid h-100">
            <div className="row h-20 align-items-center">
                <div className="col-12 col-lg-6 col-xl-4 d-flex justify-content-center justify-content-lg-start">
                    <img
                        className="steps-logo"
                        src={logoArbol}
                        alt="Logo de Más Raíces, Menos Huella"
                    />
                </div>
                <div className="col-6 col-lg-6 col-xl-8 d-none d-lg-block"></div>
            </div>

            <div className="row h-60">
                <div className="col-12 col-lg-6 col-xl-7 d-flex flex-column justify-content-center">
                    <div className="steps-text mb-4">
                        <p className="steps-line-text">
                            El primer paso que debes dar es medir los gases de efecto invernadero que generas en tu vida diaria.
                        </p>
                        <p className="steps-line-text">
                            Contestando unas preguntas muy sencillas y apegándonos a los factores de emisión del <i>Protocolo Internacional GHG</i>, podemos determinar un cálculo preciso de cuanto debemos mitigar para ser carbon neutro.
                        </p>
                    </div>
                    <div className="d-flex flex-column align-items-center align-items-lg-start">
                        <Link className="link-btn btn btn-green w-100 w-lg-75 mb-3" to="/initQuestions">
                            Medir mi huella
                        </Link>
                        <p className="text-white mb-0 text-center text-lg-start">
                            ¿Tienes una cuenta?{' '}
                            <Link className="text-blue-light" to="/loginForm">
                                Inicia sesión
                            </Link>
                        </p>
                    </div>
                </div>

                <div className="col-12 col-lg-6 col-xl-5">
                    <div className="row h-100">
                        <div className="col-12 h-50 d-flex align-items-start pt-2 d-none d-lg-flex">
                            <div className="row w-100">
                                <div className="col-6 d-flex justify-content-center">
                                    <img
                                        src={logoGreenHouse}
                                        alt="Logo de Green House Protocol"
                                        className="logo-green-house"
                                    />
                                </div>
                                <div className="col-6 d-flex justify-content-center">
                                    <img 
                                        src={logoISO} 
                                        alt="Logo de ISO" 
                                        className="logo-iso" 
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="row h-15">
                <div className="col-12 d-flex flex-column align-items-center justify-content-center">
                    <BackArrow handleAction={() => setView(1)} />
                    <p className="steps-clients-title mt-2 mb-1">Nuestros clientes</p>
                    <CarouselLogo />
                </div>
            </div>
            

        </div>
    );
};

export default FirstSteps;