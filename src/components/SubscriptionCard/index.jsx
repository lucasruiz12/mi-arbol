import React from 'react';
import './style.css';

const SubscriptionCard = ({ data, setModal, setLinkPayment }) => {

    const { name, img, price, duration, color, includes, link } = data;

    const hirePlan = () => {
        setModal(true);
        setLinkPayment(link);
    };

    return (
        <div className="card-subscription">
            <div className="card-title" style={{ backgroundColor: color }}>
                <p className="title-text">{name}</p>
            </div>
            <div className="card-img-three">
                <p>Imagen {img}</p>
            </div>
            <div className="card-container-price">
                <p className="card-price" style={{ color }}>{price}</p>
                <p className="card-duration">{duration}</p>
            </div>
            <div className="card-includes">
                {
                    includes.map((el, index) => {
                        return (
                            <p className="includes-items" key={index}>{el}</p>
                        )
                    })
                }
            </div>
            <button className="btn-plan" style={{ backgroundColor: color }} onClick={() => hirePlan()}>Contratar plan</button>
        </div>
    );
};

export default SubscriptionCard;