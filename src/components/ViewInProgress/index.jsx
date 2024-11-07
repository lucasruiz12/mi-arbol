import React from 'react';
import { logout } from '../../firebase/connections';
import homeVideo from '../../assets/videos/Home.mp4';
import './style.css';

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
                <button className="btn-green" onClick={() => goToInit()}>
                    Regresar al inicio
                </button>
            </div>
        </>
    );
};

export default ViewInProgress;