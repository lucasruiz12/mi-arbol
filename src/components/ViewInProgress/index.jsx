import React, { useEffect } from 'react';
import homeVideo from '../../assets/videos/video-view-in-progress.mp4';
import { useNavigate } from 'react-router-dom';
import './style.css';
import { IS_AUTHENTICATED } from '../../helpers/constants';

const ViewInProgress = () => {

    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem(IS_AUTHENTICATED));

    return (
        <>
            <video autoPlay muted loop className="progress-video">
                <source src={homeVideo} type="video/mp4" />
            </video>
            <div className="container-progress-view">
                <p className="progress-line">Dirección no encontrada</p>
                <button className="btn-green" onClick={() => user ? navigate("/mySeeds") : navigate("/")}>
                    Regresar al inicio
                </button>
            </div>
        </>
    );
};

export default ViewInProgress;