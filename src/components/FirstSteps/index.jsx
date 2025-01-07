import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import stepsVideo from '../../assets/videos/landinghome/video-TAO2.mp4';
// import stepsVideo from '../../assets/videos/landinghome/video-TAO2-c.mp4';
// import stepsVideo from '../../assets/videos/2. Mundo.mp4';
import stepsMobileVideo from '../../assets/videos/landinghome/video-TAO2-movil.mp4'
import logoArbol from '../../assets/logos/logo-TAO-white.svg';
import logoISO from '../../assets/logos/logo-ISO.svg';
import CarouselLogo from '../CarouselLogos';
import { tipsAndRecommendations } from '../../helpers/messagesAndTips';
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
            if (currentMessage === "" || currentMessage === 9) {
                setCurrentMessage(4)
            } else {
                setCurrentMessage(currentMessage + 1)
            };
            setTimeout(() => {
                setShowMessage(true);
            }, 1000);
        }
    }, [showMessage]);

    return (
        <div className="container-steps-view">
            <video autoPlay muted loop className="steps-video">
                <source src={window.innerWidth >= 768 ? stepsVideo : stepsMobileVideo} type="video/mp4" />
                {/* <source src={stepsVideo} type="video/mp4" /> */}
            </video>
            <div className="steps-content">
                <div className="steps-img-container">
                    <img onClick={() => setView(1)} className="steps-logo" src={logoArbol} alt="LOG" />
                    <img src={logoISO} alt="NOIMG" className="logo-iso" />
                    {/* <h2 className="steps-title">El primer paso</h2> */}
                </div>
                {
                    currentMessage !== "" && showMessage &&
                    <p className="steps-tips">{tipsAndRecommendations[currentMessage].message}</p>
                }
                <div className="steps-info-container">
                    <div className="steps-text">
                        <p className="steps-line-text">El primer paso es medir el impacto de tu día a día respondiendo unas simples preguntas que usaremos para determinar tu huella de carbono individual, apegándonos a los factores de emisión del <b>IPCC</b> y el <b>protocolo internacional de GHG.</b></p>
                    </div>
                </div>
                <Link className="link-btn" to="/initQuestions">
                    <button className="btn-green">
                        Medir mi huella
                    </button>
                </Link>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <p className="steps-clients-title">Nuestros clientes</p>
                    <CarouselLogo />
                </div>
            </div>
        </div>
    );
};

export default FirstSteps;
