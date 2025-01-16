import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingResult from '../../components/LoadingResult';
import './style.css';

const FailurePayment = () => {
    const [messageToShow, setMessageToShow] = useState("Revisando pago");

    const navigate = useNavigate();

    const checkPayment = async () => {
        setTimeout(() => {
            setMessageToShow("Error al procesar pago");
        }, 2000);
        setTimeout(() => {
            navigate("/home");
        }, 4000);
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

export default FailurePayment;