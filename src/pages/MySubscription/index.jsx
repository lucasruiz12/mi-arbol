import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import { subscriptions } from '../../helpers/subscriptions';
import SubscriptionCard from '../../components/SubscriptionCard';
import ModalPayment from '../../components/ModalPayment';
import LoadingLogo from '../../components/LoadingLogo';
import './style.css';

const MySubscription = () => {

    const [modalPayment, setModalPayment] = useState(false);
    const [linkPayment, setLinkPayment] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <>
            <NavBar />
            {
                loading ?
                    <LoadingLogo />
                    :
                    <div className="container-my-subscription">
                        <div className="my-subscription-title">
                            <p className="text-title">¡Somos la plataforma que más árboles sembrará por cada peso tuyo!</p>
                        </div>
                        <div className="container-all-subscriptions">
                            {
                                subscriptions.map((el, idx) => {
                                    return (
                                        <SubscriptionCard data={el} idx={idx} key={idx} setModal={setModalPayment} setLinkPayment={setLinkPayment} />
                                    )
                                })
                            }
                        </div>
                    </div>
            }
            {modalPayment && <ModalPayment showModal={modalPayment} hideModal={() => setModalPayment(false)} linkPayment={linkPayment} />}
        </>
    );
};

export default MySubscription;