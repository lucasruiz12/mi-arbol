import React from 'react';
import iconTree from '../../assets/icons/icon-tree.svg';
import './style.css';

const SubscriptionCard = ({ currentSubscription }) => {

    // const { price, date } = currentSubscription;
    const { price } = currentSubscription;

    return (
        <div className="card-subscription">
            <div className="card-title">
                <p className="title-text">Tu plan actual</p>
            </div>
            <div className="card-img-tree">
                <img src={iconTree} alt="NOIMG" className="img-tree" />
            </div>
            <div className="card-container-price">
                <p className="card-price">${price}</p>
                <p className="card-duration">por mes</p>
                {/* <p className="card-duration">desde {date}</p> */}
            </div>
        </div>
    );
};

export default SubscriptionCard;