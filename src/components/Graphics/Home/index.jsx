import React from 'react';
import { Link } from 'react-router-dom';
import GraphicBar from './GraphicBar';
import GraphicPie from './GraphicPie';
import './style.css';

const GraphicsHome = ({carbonPoints}) => {
    return (
        <div className="container-graphics-home">
            {/* <h3 className="graphics-comparation">Algunas comparaciones para dimensionar su consumo:</h3> */}
            <GraphicPie />
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