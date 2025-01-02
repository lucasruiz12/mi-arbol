import React from 'react';
import GraphicPie from './GraphicPie';
// import GraphicBar from '../Home/GraphicBar';
import { Link } from 'react-router-dom';
import './style.css';

const GraphicsNeutralCarbon = () => {
    return (
        <div className="container-graphics-carbon">
            <GraphicPie />
            {/* <GraphicBar /> */}
            <div className="container-button-carbon">
                <Link to="/mySubscription">
                    <button className="btn-green all-cover-btn">¡Vuélvete carbono neutro!</button>
                </Link>
            </div>
        </div>
    );
};

export default GraphicsNeutralCarbon;