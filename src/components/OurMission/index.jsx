import React, { useEffect, useState } from 'react';
// import missionVideo from '../../assets/videos/landinghome/video-TAO.mp4';
import missionVideo from '../../assets/videos/landinghome/video-test.mp4';
// import missionVideo from '../../assets/videos/landinghome/video-TAO-c.mp4';
// import missionVideo from '../../assets/videos/1. hojas.mp4';
import missionMobileVideo from '../../assets/videos/landinghome/video-TAO-movil.mp4';
import logoArbol from '../../assets/logos/logo-TAO-white.svg';
import { tipsAndRecommendations } from '../../helpers/messagesAndTips';
import './style.css';

const OurMission = ({ setView }) => {

    const [showMessage, setShowMessage] = useState(false);
    const [hideMessage, setHideMessage] = useState(false);
    const [currentMessage, setCurrentMessage] = useState("");

    useEffect(() => {
        if (showMessage) {
            setTimeout(() => {
                setShowMessage(false);
                if (currentMessage === 2) {
                    setView(2)
                };
            }, 8000);
            // }, 1000000000);
        } else {
            if (currentMessage === "") {
                setCurrentMessage(0)
            } else {
                if (currentMessage < 2) {
                    setCurrentMessage(currentMessage + 1)
                };
            };
            setTimeout(() => {
                setShowMessage(true);
                setHideMessage(false);
            }, 1000);
        }
    }, [showMessage]);

    return (
        <div className="container-mission-view">
            <video autoPlay muted loop className="mission-video">
                <source src={window.innerWidth >= 768 ? missionVideo : missionMobileVideo} type="video/mp4" />
                {/* <source src={missionVideo} type="video/mp4" /> */}
            </video>
            <div className="mission-content">
                <div className="mission-header">
                    <img /*onClick={() => setView(2)}*/ className="mission-logo" src={logoArbol} alt="LOG" />
                    {
                        currentMessage !== "" && showMessage && !hideMessage &&
                        <p className="mission-tips">{tipsAndRecommendations[currentMessage].message}</p>
                    }
                </div>
                <div className="mission-info-container">
                    <div className="mission-text">
                        <p className="mission-line-text">Te ayudamos a calcular tu huella de carbono y el impacto que tienes como persona en tu vida diaria.</p>
                        <p className="mission-line-text">Entendiendo cuántos gases de efecto invernadero generas, te ayudaremos a ser <b>CARBONO NEUTRO</b> reforestando los árboles necesarios para ello.</p>
                    </div>
                </div>
                {/* <button className="btn-green" onClick={() => setView(2)}>
                    Empezar
                </button> */}
            </div>
        </div>
    );
};

export default OurMission;