import React from 'react';
import { Link } from 'react-router-dom';
import GraphicBarRecharts from './GraphicBarRecharts';
import GraphicPie from './GraphicPie';
import './style.css';

const GraphicsHome = ({ carbonPoints, categoryPoints }) => {
    console.log('GraphicsHome render - carbonPoints:', carbonPoints);
    
    // Resoluciones simplificadas
    let pieSize = { width: '100%', height: 220 };
    let barSize = { width: '100%', height: 180 };

    if (window.innerWidth < 768) {
        // Móvil
        pieSize = { width: '100%', height: 180 };
        barSize = { width: '100%', height: 140 };
    } else if (window.innerWidth < 1024) {
        // Tablet
        pieSize = { width: '100%', height: 220 };
        barSize = { width: '100%', height: 180 };
    } else if (window.innerWidth >= 2560) {
        // 4K
        pieSize = { width: '100%', height: 350 };
        barSize = { width: '100%', height: 250 };
    }

    return (
        <div className="container-graphics-home">
            <div className="w-100 p-2 p-md-3 p-lg-4 d-flex flex-column align-items-center justify-content-start">
                <h2 className="text-white mb-2" style={{fontWeight:700, fontSize:'2rem'}}>Análisis de consumo</h2>
                <div className="w-100 mb-2 d-flex align-items-start justify-content-center" style={{minHeight:0}}>
                    <GraphicPie carbonPoints={carbonPoints} categoryPoints={categoryPoints} width={pieSize.width} height={pieSize.height} />
                </div>
                <div className="w-100 d-flex justify-content-center bar-chart-container">
                    <GraphicBarRecharts carbonPoints={carbonPoints} />
                </div>
            </div>
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