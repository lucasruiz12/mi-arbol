import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { IS_AUTHENTICATED, PRICE_TO_PAY } from '../../helpers/constants';
import logoArbol from '../../assets/logos/logo-TAO-brown.svg';
import iconGoogle from '../../assets/icons/rrss-google.svg';
import iconFacebook from '../../assets/icons/rrss-facebook.svg';
import loginConnections from '../../helpers/loginConnections';
import { Spinner } from 'react-bootstrap';
import { toast, ToastContainer, Bounce } from 'react-toastify';
import { useAuth0 } from '@auth0/auth0-react';
import handlePayment from '../../helpers/stripePayments';
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

        const userData = {
            name,
            email,
            password
        };

        try {
            const { data } = await loginConnections.createUser(userData);
            if (data.success) {
                const { email, name, id, createdAt } = data.user
                const isAuthenticated = { email, name, id, createdAt };
                const priceToPay = JSON.parse(localStorage.getItem(PRICE_TO_PAY));
                const userId = id.toString();
                localStorage.setItem(IS_AUTHENTICATED, JSON.stringify(isAuthenticated));
                await handlePayment(parseInt(priceToPay), userId, email);

                // setTimeout(() => {
                //     setLoading(false);
                //     window.location.href = "/home"
                // }, 2000);
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

    // const fakeSubmit = (e) => {
    //     e.preventDefault();
    //     setTimeout(() => {
    //         window.location.href = "/home";
    //     }, 1000);
    // };

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem(IS_AUTHENTICATED));

        if (user) {
            window.location.href = "/home";
        };

    }, []);

    return (
        <div className="container-register">
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
            {/* <form className="form-register" onSubmit={fakeSubmit}> */}
            <form className="form-register" onSubmit={submitData}>
                <div className="title-register">
                    <img className="register-logo" src={logoArbol} alt="LOG" />
                    <div className="text-register">
                        <p className="register-line">"SEMBREMOS UN ÁRBOL HOY PARA DAR SOMBRA A LAS PERSONAS DEL MAÑANA."</p>
                    </div>
                </div>
                <div className="container-input-form">
                    <label className="input-title" htmlFor="name">
                        Nombre(s):
                    </label>
                    <input
                        className="input-form"
                        type="text"
                        id="name"
                        name="name"
                        onChange={changeData}
                    />
                </div>
                <div className="container-input-form">
                    <label className="input-title" htmlFor="email">
                        Email:
                    </label>
                    <input
                        className="input-form"
                        type="email"
                        id="email"
                        name="email"
                        onChange={changeData}
                    />
                </div>
                <div className="container-input-form">
                    <label className="input-title" htmlFor="password">
                        Contraseña:
                    </label>
                    <input
                        className="input-form"
                        type="password"
                        id="password"
                        name="password"
                        onChange={changeData}
                    />
                </div>
                <div className="container-input-form">
                    <label className="input-title" htmlFor="repeatPassword">
                        Confirmar contraseña:
                    </label>
                    <input
                        className="input-form"
                        type="password"
                        id="repeatPassword"
                        name="repeatPassword"
                        onChange={changeData}
                    />
                </div>
                <div className="container-all-btns">
                    <div className="container-social-media">
                        <span className="span-social-media">Registrarse con: </span>
                        <div className="container-btn-social-media">
                            <img src={iconGoogle} alt='GS' className="btn-social-media"
                                onClick={() => loginWithRedirect({ redirectUri: window.location.origin + "/loadingUser" })}
                            />
                            <img src={iconFacebook} alt='FB' className="btn-social-media"
                                onClick={() => loginWithRedirect({ redirectUri: window.location.origin + "/loadingUser" })}
                            />
                        </div>
                    </div>
                    <div className="link-container-register">
                        {
                            loading ?
                                <button className="btn-green-register">
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
                                    className={`btn-green-register${(formData.name === "" ||
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
                    {/* <div className="container-social-media">
                        <Link to="/loginForm">
                            <span style={{ cursor: "pointer" }}>¿Tienes cuenta? Iniciar sesión</span>
                        </Link>
                    </div> */}
                </div>
            </form>


        </div>
    );
};

export default Register;