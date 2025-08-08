import React, { useEffect, useState } from 'react';
import { ACCESS_TOKEN, CARBON_POINTS, CATEGORY_POINTS, IS_AUTHENTICATED, PRICE_TO_PAY } from '../../helpers/constants';
import logoArbol from '../../assets/logos/logo-mas-raices.png';
import iconGoogle from '../../assets/icons/rrss-google.svg';
import iconFacebook from '../../assets/icons/rrss-facebook.svg';
import loginConnections from '../../helpers/loginConnections';
import { Spinner } from 'react-bootstrap';
import { toast, ToastContainer, Bounce } from 'react-toastify';
import { useAuth0 } from '@auth0/auth0-react';
import handlePayment from '../../helpers/stripePayments';
import LoadingResult from '../LoadingResult';
import './style.css';

const Register = () => {

    const { loginWithRedirect } = useAuth0();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        repeatPassword: "",
    });

    const [loading, setLoading] = useState(false);
    const [loadingGif, setLoadingGif] = useState(true);

    const changeData = (event, data) => {
        if (data) {
            setFormData({
                ...formData,
                [data.name]: data.value,
            });
        } else {
            setFormData({
                ...formData,
                [event.target.name]: event.target.value,
            });
        };
    };

    const submitData = async (e) => {
        e.preventDefault();

        setLoading(true);

        const { name, email, password } = formData;
        const carbonPoints = JSON.parse(localStorage.getItem(CARBON_POINTS));
        const categoryPoints = JSON.parse(localStorage.getItem(CATEGORY_POINTS));

        const userData = {
            name,
            email,
            password,
            carbonPoints,
            categoryPoints
        };

        try {
            const { data } = await loginConnections.createUser(userData);
            if (data.success) {
                const { email, name, id, createdAt } = data.user;
                const { token } = data;
                const isAuthenticated = { email, name, id, createdAt };
                const priceToPay = JSON.parse(localStorage.getItem(PRICE_TO_PAY));
                const userId = id.toString();
                localStorage.setItem(IS_AUTHENTICATED, JSON.stringify(isAuthenticated));
                localStorage.setItem(ACCESS_TOKEN, token);
                await handlePayment(parseInt(priceToPay), userId, email, token);
            } else {
                setTimeout(() => {
                    toast.error('Error!', {
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
                    setLoading(false);
                }, 2000);
            };
        } catch (err) {
            const { message } = err.response?.data;
            setTimeout(() => {
                toast.error(message, {
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
                setLoading(false);
                console.error(err);
            }, 2000);
        };
    };

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem(IS_AUTHENTICATED));

        if (user) {
            window.location.href = "/mySeeds";
        };

        setTimeout(() => {
            setLoadingGif(false);
        }, 3000);

    }, []);

    return (
        loadingGif ? <LoadingResult message="Cargando" /> :
            <div className="container-fluid d-flex align-items-center justify-content-center py-5 register-wrapper">
                <div className="row w-100 justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8 col-xl-6 col-xxl-5">
                        <div className="container-register p-3 p-md-4 shadow rounded bg-white bg-opacity-75">
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
                            <form className="form-register" onSubmit={submitData}>
                                <div className="title-register text-center mb-4">
                                    <img className="register-logo mb-3" src={logoArbol} alt="LOG" style={{ maxWidth: '70px' }} />
                                    <div className="text-register">
                                        <p className="register-line">
                                            "SEMBREMOS UN ÁRBOL HOY PARA DAR SOMBRA A LAS PERSONAS DEL MAÑANA."
                                        </p>
                                    </div>
                                </div>
                                <div className="row g-3">
                                    <div className="col-12">
                                        <label className="input-title" htmlFor="name">Nombre(s):</label>
                                        <input className="input-form form-control w-100" type="text" id="name" name="name" onChange={changeData} />
                                    </div>
                                    <div className="col-12">
                                        <label className="input-title" htmlFor="email">Email:</label>
                                        <input className="input-form form-control w-100" type="email" id="email" name="email" onChange={changeData} />
                                    </div>
                                    <div className="col-12 mt-3">
                                        <label className="input-title" htmlFor="password">Contraseña:</label>
                                        <input className="input-form form-control w-100" type="password" id="password" name="password" onChange={changeData} />
                                    </div>
                                    <div className="col-12 mt-3">
                                        <label className="input-title" htmlFor="repeatPassword">Confirmar contraseña:</label>
                                        <input className="input-form form-control w-100" type="password" id="repeatPassword" name="repeatPassword" onChange={changeData} />
                                    </div>
                                </div>
                                <div className="container-all-btns mt-4">
                                    <div className="container-social-media mb-3">
                                        <span className="span-social-media">Registrarse con: </span>
                                        <div className="container-btn-social-media">
                                            <img src={iconGoogle} alt='GS' className="btn-social-media"
                                                onClick={() => loginWithRedirect({ redirectUri: window.location.origin + "/loadingUser", scope: "openid profile email", prompt: "consent" })}
                                            />
                                            <img src={iconFacebook} alt='FB' className="btn-social-media"
                                                onClick={() => loginWithRedirect({ redirectUri: window.location.origin + "/loadingUser", scope: "openid profile email", prompt: "consent" })}
                                            />
                                        </div>
                                    </div>
                                    <div className="link-container-register text-center" style={{
                                        marginTop: window.innerWidth === 1440 && window.innerHeight === 858 ? '0.5rem' : 'inherit'
                                    }}>
                                        {
                                            loading ?
                                                <button className="btn-green-register w-100">
                                                    <Spinner
                                                        as="span"
                                                        animation="border"
                                                        size="sm"
                                                        role="status"
                                                        aria-hidden="true"
                                                    />
                                                </button>
                                                :
                                                <input
                                                    type="submit"
                                                    value="Registrarse"
                                                    className={`btn-green-register w-100${(formData.name === "" ||
                                                        formData.email === "" ||
                                                        formData.password === "" ||
                                                        formData.repeatPassword === "" ||
                                                        formData.password.length < 7 ||
                                                        formData.password !== formData.repeatPassword) ? " disabled" : ""}`}
                                                    disabled={
                                                        formData.email === "" ||
                                                        formData.password === "" ||
                                                        formData.repeatPassword === "" ||
                                                        formData.password.length < 7 ||
                                                        formData.password !== formData.repeatPassword
                                                    }
                                                />
                                        }
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Register;