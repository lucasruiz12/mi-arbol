import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
// import { useNavigate } from 'react-router-dom';
import { CARBON_POINTS, IS_AUTHENTICATED, PRICE_TO_PAY } from '../../helpers/constants';
import { logout } from '../../firebase/connections';
import loginConnections from '../../helpers/loginConnections';
import { toast, ToastContainer, Bounce } from 'react-toastify';
import LoadingLogo from '../../components/LoadingLogo';
import handlePayment from '../../helpers/stripePayments';

const LoadingUser = () => {
    const { user, isAuthenticated } = useAuth0();

    const makeRegister = async (userData) => {
        try {
            const { data } = await loginConnections.loginUser(userData);
            if (data.success) {
                const { subscription } = data;
                const { email, name, id, createdAt } = data.user
                const isAuthenticated = { email, name, id, createdAt, subscription };
                const priceToPay = JSON.parse(localStorage.getItem(PRICE_TO_PAY));
                const userId = id.toString();
                localStorage.setItem(IS_AUTHENTICATED, JSON.stringify(isAuthenticated));
                await handlePayment(parseInt(priceToPay), userId, email);
                // setTimeout(() => {
                //     navigate("/home");
                // }, 2500);
            } else {
                toast.error("Error. Intente nuevamente", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                });
                setTimeout(() => {
                    logout();
                }, 2000);
            };
        } catch (err) {
            console.error(err);
            toast.error("Error. Intente nuevamente!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
            setTimeout(() => {
                logout();
            }, 2000);
        };
    };

    useEffect(() => {
        if (isAuthenticated) {
            const { name, sub } = user;
            const carbonPoints = parseFloat(JSON.parse(localStorage.getItem(CARBON_POINTS)));
            const dataUser = {
                name,
                email: "",
                password: "",
                carbonPoints
            };
            if (user.email) {
                dataUser.email = user.email;
                dataUser.password = "T40s0lu7i0n5-Google";
            } else {
                dataUser.email = sub;
                dataUser.password = "T40s0lu7i0n5-Facebook";
            };

            makeRegister(dataUser);
        };
    }, [isAuthenticated, user]);

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition={Bounce}
            />
            <LoadingLogo />
        </>
    );
};

export default LoadingUser;