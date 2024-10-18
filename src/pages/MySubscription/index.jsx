import React from 'react';
import NavBar from '../../components/NavBar';
import './style.css';
import { subscriptions } from '../../helpers/subscriptions';
import SubscriptionCard from '../../components/SubscriptionCard';

const MySubscription = () => {
    return (
        <>
            <NavBar />
            <div className="container-my-subscription">
                <div className="my-subscription-title">
                    <p className="text-title">¡Somos la plataforma que más árboles sembrará por cada peso tuyo!</p>
                </div>
                <div className="container-all-subscriptions">
                {
                    subscriptions.map((el, idx) => {
                        return (
                            <SubscriptionCard data={el} idx={idx} key={idx} />
                        )
                    })
                }
                </div>
            </div>
        </>
    );
};

export default MySubscription;