import React, { useEffect, useState } from 'react';
import logoArbol from '../../assets/logos/logo-mas-raices.png';
import { tipsAndRecommendations } from '../../helpers/messagesAndTips';
import './style.css';

const OurMission = ({ setView }) => {
  const [showMessage, setShowMessage] = useState(false);
  const [hideMessage, setHideMessage] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');
  const [notTimer, setNotTimer] = useState(false);

  const handleClick = () => {
    setView(2);
    setNotTimer(true);
    removeClick();
  };

  const removeClick = () => {
    document.removeEventListener('click', handleClick);
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => removeClick();
  }, []);

  useEffect(() => {
    if (!notTimer) {
      if (showMessage) {
        setTimeout(() => {
          setShowMessage(false);
          if (currentMessage === 3) {
            setView(2);
            removeClick();
          }
        }, 8000);
      } else {
        if (currentMessage === '') {
          setCurrentMessage(0);
        } else {
          if (currentMessage < 3) {
            setCurrentMessage(currentMessage + 1);
          }
        }
        setTimeout(() => {
          setShowMessage(true);
          setHideMessage(false);
        }, 1000);
      }
    }
  }, [showMessage]);

  return (
    <div className="container-mission-view container-fluid h-100">
      <div className="mission-content row h-100 ms-md-4 align-items-md-around">
        <div className="mission-header col-12 d-flex justify-content-md-between justify-content-center align-items-center">
          <img
            className="mission-logo"
            src={logoArbol}
            alt="Logo de Más Raíces, Menos Huella"
          />
          {currentMessage !== '' && showMessage && !hideMessage && (
            <p className="mission-tips">{tipsAndRecommendations[currentMessage].message}</p>
          )}
        </div>
        <div className="mission-info-container col-12">
          <div className="mission-text col-12 col-md-8 col-lg-6">
            <p className="mission-line-text">
              En “Más Raíces, Menos Huella” te ayudamos a calcular tus emisiones diarias para entender el impacto que tienes como persona.
            </p>
            <p className="mission-line-text">
              Al entender cuanto CO2 generas, te ayudaremos a reforestar los suficientes árboles para mitigar tu huella de carbono.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;