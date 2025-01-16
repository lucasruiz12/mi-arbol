import React, { useEffect, useState } from 'react';
import loginConnections from '../../helpers/loginConnections';
import { IS_AUTHENTICATED, PAYMENT_DATA, SESSION_ID_PAYMENT } from '../../helpers/constants';
import { useNavigate } from 'react-router-dom';
import LoadingResult from '../../components/LoadingResult';
import './style.css';

const SuccessPayment = () => {
    const [messageToShow, setMessageToShow] = useState("Revisando pago");

    const navigate = useNavigate();

    const checkPayment = async () => {
        const sessionId = localStorage.getItem(SESSION_ID_PAYMENT)
        if (sessionId) {
            try {
                const { data } = await loginConnections.verifyPayment({ sessionId });
                if (data.success) {
                    if (data.paymentData) {
                        const newUserData = JSON.parse(localStorage.getItem(IS_AUTHENTICATED));
                        newUserData.subscription = data.paymentData;
                        localStorage.setItem(IS_AUTHENTICATED, JSON.stringify(newUserData));
                        localStorage.setItem(PAYMENT_DATA, JSON.stringify(data.paymentData));
                    };

                    localStorage.removeItem(SESSION_ID_PAYMENT);
                    setTimeout(() => {
                        setMessageToShow("Se cargó completamente el pago");
                    }, 2000);
                    setTimeout(() => {
                        navigate("/home");
                    }, 3000);
                } else {
                    setTimeout(() => {
                        setMessageToShow("No se cargó completamente el pago");
                    }, 2000);
                    setTimeout(() => {
                        // navigate("/home");
                    }, 3000);
                };
            } catch (err) {
                console.error(err);
            };
        } else {
            setTimeout(() => {
                setMessageToShow("Se cargó completamente el pago");
            }, 1500);
        }
    };

    useEffect(() => {
        checkPayment();
    }, []);

    return (
        <div className="container-loader-result">
            <LoadingResult message={messageToShow} />
        </div>
    );
};

export default SuccessPayment;