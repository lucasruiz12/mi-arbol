import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import SubscriptionCard from '../../components/SubscriptionCard';
import { IS_AUTHENTICATED } from '../../helpers/constants';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';

const MySubscription = () => {

    // const [currentSubscription, setCurrentSubscription] = useState({ price: 0, date: "" });
    const [currentSubscription, setCurrentSubscription] = useState({ price: 0 });
    const navigate = useNavigate();

    useEffect(() => {
        const isAuthenticated = JSON.parse(localStorage.getItem(IS_AUTHENTICATED));
        if (isAuthenticated) {
            if (isAuthenticated.subscription) {
                // const { amount, created_at } = isAuthenticated.subscription;
                // setCurrentSubscription({
                //     price: parseInt(amount),
                //     date: created_at,
                // });
                const { amount } = isAuthenticated.subscription;
                setCurrentSubscription({
                    price: parseInt(amount),
                });
            } else {
                navigate("/mySeeds");
            };
        };
    }, []);

    return (
        <div className="container-my-subscription">
            <NavBar />
            <div className="container-my-subscription-content">
                <div className="my-subscription-title">
                    <p className="text-title">¡Gracias por ser parte de esta comunidad! Con tu aporte has dado el primer paso para ayudar a mejorar el medio ambiente</p>
                </div>
                <div className="container-all-subscriptions">
                    <p className="text-message">Continúa ayudándonos a mitigar tu huella de carbono actualizando tu plan por uno superior.</p>
                </div>
                <div className="container-actual-plan">
                    <SubscriptionCard currentSubscription={currentSubscription} />
                </div>
                <Link className="container-btn-plan" to="/subscriptionPlans" >
                    <button className="btn-green upgrade-btn">Mejorar plan</button>
                </Link>
            </div>
        </div>
    );
};

export default MySubscription;