import React from 'react';
import { Link } from 'react-router-dom';
import stepsVideo from '../../assets/videos/2. Mundo.mp4';
import './style.css'

const FirstSteps = () => {
    return (
        <div className="container-steps-view">
            <video autoPlay muted loop className="steps-video">
                <source src={stepsVideo} type="video/mp4" />
            </video>
            <div className="steps-content">
                <p style={{ height: "10vh", width: "10vh", border: "solid 1px black" }}>Logo</p>
                <h2 className="steps-title">Nuestra misión</h2>
                <div className="steps-text">
                    <p className="steps-line-text">Es entender cuántos gases de efecto invernadero generas en tu vida diaria, por lo que te haremos 8 sencillas preguntas sobre tu día a día para conocer tu huella.</p>
                    <p className="steps-line-text">El resultado es un estimado muy preciso, realizado de acuerdo al protocolo internacional para el cálculo de gases de efecto invernadero.</p>
                </div>
                <Link to="/loginForm">
                    <button className="btn-green">
                        Registrarse
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default FirstSteps;