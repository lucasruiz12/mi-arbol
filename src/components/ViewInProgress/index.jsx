import React from 'react';
import homeVideo from '../../assets/videos/video-view-in-progress.mp4';
import { useNavigate } from 'react-router-dom';
import './style.css';

const ViewInProgress = () => {

    const navigate = useNavigate();

    return (
        <>
            <video autoPlay muted loop className="progress-video">
                <source src={homeVideo} type="video/mp4" />
            </video>
            <div className="container-progress-view">
                <p className="progress-line">Estamos trabajando en este proceso</p>
                <button className="btn-green" onClick={() => navigate("/home")}>
                    Regresar al inicio
                </button>
            </div>
        </>
    );
};

export default ViewInProgress;