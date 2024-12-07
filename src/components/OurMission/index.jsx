import React, { useEffect, useState } from 'react';
import missionVideo from '../../assets/videos/1. hojas.mp4';
import missionMobileVideo from '../../assets/videos/1. hojasMobile.mp4';
import logoArbol from '../../assets/logos/logo-TAO-brown.svg';
import { tipsAndRecommendations } from '../../helpers/messagesAndTips';
import './style.css';

const OurMission = ({ setView }) => {

    const [showMessage, setShowMessage] = useState(false);
    const [currentMessage, setCurrentMessage] = useState("");

    useEffect(() => {
        if (showMessage) {
            setTimeout(() => {
                setShowMessage(false);
            }, 8000);
            // }, 1000000000);
        } else {
            const randomNumber = Math.floor(Math.random() * 30);
            setCurrentMessage(tipsAndRecommendations[randomNumber].message)
            setTimeout(() => {
                setShowMessage(true);
            }, 2000);
        }
    }, [showMessage]);

    return (
        <div className="container-mission-view">
            <video autoPlay muted loop className="mission-video">
                <source src={window.innerWidth >= 768 ? missionVideo : missionMobileVideo} type="video/mp4" />
            </video>
            <div className="mission-content">
                <div className="mission-header">
                    <img className="mission-logo" src={logoArbol} alt="LOG" />
                    {
                        showMessage &&
                        <p className="mission-tips">{currentMessage}</p>
                    }
                </div>
                <div className="mission-info-container">
                    <div className="mission-text">
                        <p className="mission-line-text">Te ayudamos a calcular tu huella de carbono y el impacto que tienes como persona en tu vida diaria.</p>
                        <p className="mission-line-text">Entendiendo cuántos gases de efecto invernadero generas, te ayudaremos a ser <b>CARBONO NEUTRO</b> reforestando los árboles necesarios para ello.</p>
                    </div>
                </div>
                <button className="btn-green" onClick={() => setView(2)}>
                    Empezar
                </button>
            </div>
        </div>
    );
};

export default OurMission;