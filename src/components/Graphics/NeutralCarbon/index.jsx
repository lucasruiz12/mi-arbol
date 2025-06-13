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
          <div className="container-button-more-information text-center my-4 w-100">
            <button className="btn-green btn-info w-50" onClick={() => showModal()}>
              ¿Quién es TAO?
            </button>
          </div>
          <div className="container-button-carbon text-center">
            <Link to="/subscriptionPlans" className="link-btn-carbon">
              <button className="btn-green all-cover-btn">¡Vuélvete carbono neutro!</button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default GraphicsNeutralCarbon;