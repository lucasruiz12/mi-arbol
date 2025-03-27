import React, { useEffect, useState } from 'react';
import loginConnections from '../../helpers/loginConnections';
import { IS_AUTHENTICATED, PAYMENT_DATA, SESSION_ID_PAYMENT } from '../../helpers/constants';
import { useNavigate } from 'react-router-dom';
import LoadingResult from '../../components/LoadingResult';
import { useAuth0 } from '@auth0/auth0-react';
import './style.css';

const SuccessPayment = () => {
    const [messageToShow, setMessageToShow] = useState("Revisando pago");

    const navigate = useNavigate();
    const logout = useAuth0;

    const checkPayment = async () => {
        const sessionId = localStorage.getItem(SESSION_ID_PAYMENT)
        if (sessionId) {
            try {
                const { data } = await loginConnections.verifyPayment({ sessionId });
                if (data.success) {
                    const newUserData = JSON.parse(localStorage.getItem(IS_AUTHENTICATED));
                    if (data.paymentData) {
                        newUserData.subscription = data.paymentData;
                        localStorage.setItem(PAYMENT_DATA, JSON.stringify(data.paymentData));
                        localStorage.setItem(IS_AUTHENTICATED, JSON.stringify(newUserData));
                    };

                    localStorage.removeItem(SESSION_ID_PAYMENT);
                    if (!newUserData.email.includes("@")) {
                        const updateData = {
                            userId: newUserData.id,
                            email: data.userEmail
                        };
                        const response = await loginConnections.updateUser(updateData);
                        if (response.data.success) {
                            newUserData.email = data.userEmail;
                            localStorage.setItem(IS_AUTHENTICATED, JSON.stringify(newUserData));
                            setTimeout(() => {
                                setMessageToShow("Se cargó completamente el pago");
                            }, 2000);
                            setTimeout(() => {
                                navigate("/mySeeds");
                            }, 3000);
                        };
                    } else {
                        setTimeout(() => {
                            setMessageToShow("Se cargó completamente el pago");
                        }, 2000);
                        setTimeout(() => {
                            navigate("/mySeeds");
                        }, 3000);
                    }
                } else {
                    setTimeout(() => {
                        setMessageToShow("No se cargó completamente el pago");
                    }, 2000);
                    setTimeout(() => {
                        logout();
                        navigate("/home");
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