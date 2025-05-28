import React, { useEffect, useState } from 'react';
import logoArbol from '../../assets/logos/logo-TAO-white.svg';
import { tipsAndRecommendations } from '../../helpers/messagesAndTips';
import './style.css';

const OurMission = ({ setView }) => {

    const [showMessage, setShowMessage] = useState(false);
    const [hideMessage, setHideMessage] = useState(false);
    const [currentMessage, setCurrentMessage] = useState("");
    const [notTimer, setNotTimer] = useState(false);

    const handleClick = () => {
        setView(2);
        setNotTimer(true);
        removeClick();
    };

    const removeClick = () => {
        document.removeEventListener("click", handleClick);
    };

    useEffect(() => {
        document.addEventListener("click", handleClick);
    }, []);

    useEffect(() => {
        if (!notTimer) {
            if (showMessage) {
                setTimeout(() => {
                    setShowMessage(false);
                    if (currentMessage === 3) {
                        setView(2);
                        removeClick();
                    };
                }, 8000);
                // }, 1000000000);
            } else {
                if (currentMessage === "") {
                    setCurrentMessage(0)
                } else {
                    if (currentMessage < 3) {
                        setCurrentMessage(currentMessage + 1)
                    };
                };
                setTimeout(() => {
                    setShowMessage(true);
                    setHideMessage(false);
                }, 1000);
            };
        };
    }, [showMessage]);

    return (
        <div className="container-mission-view vh-100">
            <div className="mission-content d-flex flex-column h-100">
                <div className="mission-header position-relative">
                    <img /*onClick={() => setView(2)}*/ className="mission-logo" src={logoArbol} alt="LOG" />
                    {currentMessage !== "" && showMessage && !hideMessage && (
                        <div className="mission-tips">
                            {tipsAndRecommendations[currentMessage].message}
                        </div>
                    )}
                </div>
                <div className="mission-info-container flex-grow-1">
                    <div className="mission-text">
                        <p className="mission-line-text mb-4">En "Más Raíces, Menos Huella" te ayudamos a calcular tus emisiones diarias para entender el impacto que tienes como persona.</p>
                        <p className="mission-line-text">Al entender cuanto CO2 generas, te ayudaremos a reforestar los suficientes árboles para mitigar tu huella de carbono.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurMission;