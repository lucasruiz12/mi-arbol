import React from 'react';
import GraphicPie from './GraphicPie';
import GraphicBar from './GraphicBar';
import { Link } from 'react-router-dom';
import ButtonStyledMain from '../../ButtonStyledMain';
import './style.css';

const GraphicsHome = () => {
    return (
        <div className="container-graphics-home">
            <div className="container-graphic">
                <GraphicPie />
            </div>
            <div className="container-graphic">
                <GraphicBar />
            </div>
            <div className="container-button-home">
                <Link to="/mySubscription">
                    <ButtonStyledMain text="Mitigar tu huella" />
                    {/* <button className="btn-green all-cover-btn">Mitigar tu huella</button> */}
                </Link>
            </div>
        </div>
    );
};

export default GraphicsHome;