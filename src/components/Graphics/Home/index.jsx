import React from 'react';
import { Link } from 'react-router-dom';
import GraphicBar from './GraphicBar';
import GraphicPie from './GraphicPie';
import './style.css';

const GraphicsHome = ({ carbonPoints, categoryPoints }) => {
    return (
        <div className="container-graphics-home">
            <GraphicPie carbonPoints={carbonPoints} categoryPoints={categoryPoints} />
            <GraphicBar carbonPoints={carbonPoints} />
            <p className="item-home-tofix"></p>
            <div className="container-button-home">
                <Link className="container-link" to="/neutralCarbon">
                    <button className="btn-green all-cover-btn">Mitigar tu huella</button>
                </Link>
            </div>
        </div>
    );
};

export default GraphicsHome;