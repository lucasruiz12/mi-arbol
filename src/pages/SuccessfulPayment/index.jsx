import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCustomerByEmail } from '../../stripe/connections';

const SuccessfulPayment = () => {

    const [statusPayment, setStatusPayment] = useState(false);

    useEffect(() => {
        const sessionEmail = "juan@gmail.com";
        // const sessionEmail = JSON.parse(localStorage.getItem("sessionEmail"));
        getCustomerByEmail(sessionEmail).then(response => {
            if (response.length > 0) {
                console.log(response);
                setStatusPayment(true);
            } else {
                setTimeout(() => {
                    window.location.href = "/"
                }, 3000);
            }
        })
            .catch(err => console.error(err));
    }, []);


    return (
        <div>
            {
                statusPayment ?
                    <>
                        <p>Pago correcto</p>
                        <Link to="/home">
                            <button>Volver al home</button>
                        </Link>
                    </>
                    :
                    <>
                        <p>Error en el pago: será redirigido</p>
                    </>

            }
        </div>
    );
};

export default SuccessfulPayment;