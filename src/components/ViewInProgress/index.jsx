import React from 'react';
import { logout } from '../../firebase/connections';
import homeVideo from '../../assets/videos/Home.mp4';
import './style.css';
import ButtonStyledQuestions from '../ButtonStyledQuestions';

const ViewInProgress = () => {

    const goToInit = () => {
        logout();
        setTimeout(() => {
            window.location.href = "/"
        }, 500);
    };

    return (
        <>
            <video autoPlay muted loop className="progress-video">
                <source src={homeVideo} type="video/mp4" />
            </video>
            <div className="container-progress-view">
                <p className="progress-line">Estamos trabajando en este proceso</p>
                <ButtonStyledQuestions text="Regresar al inicio" functionClick={() => goToInit()} />
                {/* <button className="btn-green" onClick={() => goToInit()}>
                    Regresar al inicio
                </button> */}
            </div>
        </>
    );
};

export default ViewInProgress;