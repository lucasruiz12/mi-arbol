import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import GraphicBar from './GraphicBar';

const GraphicsHome = () => {
    return (
        <div className="container-graphics-home">
            <h3 className="graphics-comparation">Algunas comparaciones para dimensionar su consumo:</h3>
            <GraphicBar />
            <p className="item-home-tofix"></p>
            <div className="container-button-home">
                <Link className="container-link" to="/mySubscription">
                    <button className="btn-green all-cover-btn">Mitigar tu huella</button>
                </Link>
            </div>
        </div>
    );
};

export default GraphicsHome;