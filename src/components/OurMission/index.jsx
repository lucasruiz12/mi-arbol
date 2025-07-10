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
    <div className="container-mission-view container-fluid">
      {/* Fila 1: Logo y mission tips */}
      <div className="row align-items-center mb-4">
        <div className="col-12 col-md-4 col-lg-3 text-center text-lg-start align-items-center">
          <img
            className="mission-logo"
            src={logoArbol}
            alt="Logo de Más Raíces, Menos Huella"
          />
        </div>
        <div className="col-12 col-md-8 col-lg-9 d-none d-md-flex justify-content-center justify-content-md-end align-items-center">
          {currentMessage !== '' && showMessage && !hideMessage && (
            <p className="mission-tips mb-0">{tipsAndRecommendations[currentMessage].message}</p>
          )}
        </div>
      </div>
      {/* Fila 2: Mission text */}
      <div className="row">
        <div className="col-12 col-md-8 offset-md-2">
          <div className="mission-text">
            <p className="mission-line-text">
              En “Más Raíces, Menos Huella” te ayudamos a calcular tus emisiones diarias para entender el impacto que tienes como persona.
            </p>
            <p className="mission-line-text">
              Al entender cuanto CO2 generas, te ayudaremos a reforestar los suficientes árboles para mitigar tu huella de carbono.
            </p>
            {/* Tips debajo del texto en tablet/móvil */}
            <div className="d-block d-md-none mt-3">
              {currentMessage !== '' && showMessage && !hideMessage && (
                <p className="mission-tips mb-0">{tipsAndRecommendations[currentMessage].message}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;