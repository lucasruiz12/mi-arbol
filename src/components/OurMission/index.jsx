import React, { useEffect, useState } from 'react';
import missionVideo from '../../assets/videos/1. hojas.mp4';
import missionMobileVideo from '../../assets/videos/1. hojasMobile.mp4';
import logoArbol from '../../assets/logos/logo-TAO-brown.svg';
import { tipsAndRecommendations } from '../../helpers/messagesAndTips';
import './style.css';

const OurMission = ({ setView }) => {
    const [showMessage, setShowMessage] = useState(false);
    const [currentMessage, setCurrentMessage] = useState(0);

    useEffect(() => {
        if (showMessage) {
            const timeoutId = setTimeout(() => {
                setShowMessage(false);

                if (currentMessage === 2) {
                    setView(2);
                } else {
                    setCurrentMessage((prev) => prev + 1);
                    setShowMessage(true);
                }
            }, 8000);

            return () => clearTimeout(timeoutId); // Limpia el timeout para evitar fugas.
        }
    }, [showMessage, currentMessage, setView]);

    const handleCloseMessage = () => {
        setShowMessage(false);
    };

    useEffect(() => {
        if (!showMessage && currentMessage < 2) {
            const timerId = setTimeout(() => setShowMessage(true), 1000);
            return () => clearTimeout(timerId);
        }
    }, [showMessage, currentMessage]);

    return (
        <div className="container-mission-view">
            <video autoPlay muted loop className="mission-video">
                <source
                    src={window.innerWidth >= 768 ? missionVideo : missionMobileVideo}
                    type="video/mp4"
                />
            </video>
            <div className="mission-content">
                <div className="mission-header">
                    <img
                        onClick={() => setView(2)}
                        className="mission-logo"
                        src={logoArbol}
                        alt="LOG"
                    />
                    {showMessage && (
                        <>
                            <p className="mission-tips">
                                {tipsAndRecommendations[currentMessage]?.message}
                            </p>
                            <p
                                className="close-mission-tips"
                                onClick={handleCloseMessage}
                            >
                                x
                            </p>
                        </>
                    )}
                </div>
                <div className="mission-info-container">
                    <div className="mission-text">
                        <p className="mission-line-text">
                            Te ayudamos a calcular tu huella de carbono y el impacto que tienes
                            como persona en tu vida diaria.
                        </p>
                        <p className="mission-line-text">
                            Entendiendo cuántos gases de efecto invernadero generas, te ayudaremos
                            a ser <b>CARBONO NEUTRO</b> reforestando los árboles necesarios para ello.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurMission;
