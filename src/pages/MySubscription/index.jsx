import React, { useState } from 'react';
import NavBar from '../../components/NavBar';
import { subscriptions } from '../../helpers/subscriptions';
import SubscriptionCard from '../../components/SubscriptionCard';
import ModalPayment from '../../components/ModalPayment';
import './style.css';

const MySubscription = () => {

    const [modalPayment, setModalPayment] = useState(false);

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
                            <SubscriptionCard data={el} idx={idx} key={idx} setModal={setModalPayment} />
                        )
                    })
                }
                </div>
            </div>
            {modalPayment && <ModalPayment showModal={modalPayment} hideModal={() => setModalPayment(false)} />}
        </>
    );
};

export default MySubscription;