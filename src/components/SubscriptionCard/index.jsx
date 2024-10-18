import React from 'react';
import './style.css';

const SubscriptionCard = ({ data }) => {

    const { name, img, price, duration, color, includes } = data;

    return (
        <div className="card-subscription">
            <div className="card-title" style={{ backgroundColor: color }}>
                <p className="title-text">{name}</p>
            </div>
            <p>Imagen {img}</p>
            <div>
                <p>{price}</p>
                <p>{duration}</p>
            </div>
            <div>
                {
                    includes.map((el, index) => {
                        return (
                            <p key={index}>{el}</p>
                        )
                    })
                }
            </div>
            <button className="btn-plan" style={{ backgroundColor: color }}>Contratar plan</button>
        </div>
    )
}

export default SubscriptionCard