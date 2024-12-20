import React from 'react';
import GraphicPie from './GraphicPie';
import GraphicBar from './GraphicBar';
import { Link } from 'react-router-dom';
import './style.css';

const GraphicsHome = () => {
    return (
        <div className="container-graphics-home">
            <GraphicPie />
            {/* <GraphicBar /> */}
            <div className="container-button-home">
                <Link to="/mySubscription">
                    <button className="btn-green all-cover-btn">Mitigar tu huella</button>
                </Link>
            </div>
        </div>
    );
};

export default GraphicsHome;