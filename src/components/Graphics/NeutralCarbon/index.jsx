import React from 'react';
import GraphicPie from './GraphicPie';
import { Link } from 'react-router-dom';
import './style.css';

const GraphicsNeutralCarbon = ({ showModal }) => {
    return (
        <div className="container-graphics-carbon">
            <GraphicPie />
            <div className="container-button-more-information">
                <button style={{ marginTop: "2vh" }} className="btn-green" onClick={() => showModal()}>¿Quién es TAO?</button>
            </div>
            <div className="container-button-carbon">
                <Link to="/subscriptionPlans">
                    <button className="btn-green all-cover-btn">¡Vuélvete carbono neutro!</button>
                </Link>
            </div>
        </div>
    );
};

export default GraphicsNeutralCarbon;