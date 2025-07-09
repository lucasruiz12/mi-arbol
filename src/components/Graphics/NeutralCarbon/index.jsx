import React from 'react';
import GraphicPieRecharts from './GraphicPie';
import { Link } from 'react-router-dom';
import './style.css';

const GraphicsNeutralCarbon = ({ showModal }) => {
  return (
    <div className="container-graphics-carbon container">
        <div className="col-12">
            <div className="container-graphic-pie-recharts">
          <GraphicPieRecharts />
            </div>
          {/* Elimino el botón de '¡Vuélvete carbono neutro!' aquí */}
        </div>
      </div>
  );
};

export default GraphicsNeutralCarbon;