import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { loginWithEmail, loginWithGoogle, loginWithFacebook } from '../../firebase/connections';
import { IS_AUTHENTICATED } from '../../helpers/constants';
import LoadingLogo from '../LoadingLogo';
import logoFull from '../../assets/logos/logo-TAO-brown.svg';
import iconGoogle from '../../assets/icons/rrss-google.svg';
import iconFacebook from '../../assets/icons/rrss-facebook.svg';
import loginConnections from '../../helpers/loginConnections';
import { toast, ToastContainer, Bounce } from 'react-toastify';
import './style.css';

const Login = () => {

    const [formData, setFormData] = useState({
        user: "",
        password: "",
    });

    const [loading, setLoading] = useState(true);

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

    const submitData = async (event) => {
        event.preventDefault();
        try {
            const user = await loginWithEmail(formData.user, formData.password);
            const { accessToken, displayName, email, uid } = user;
            const dataToStorage = {
                accessToken,
                displayName,
                email,
                uid
            };

            localStorage.setItem(IS_AUTHENTICATED, JSON.stringify(dataToStorage));
            window.location.href = "/home";
        } catch (err) {
            console.error("Error registrando usuario:", err);
        };
    };

    const fakeSubmit = async (e) => {
        e.preventDefault();

        const { user: email, password } = formData;

        const userData = {
            email,
            password,
        };

        try {
            const { data } = await loginConnections.loginUser(userData);
            if (data.success) {
                const { email, name, id, createdAt } = data.user
                const isAuthenticated = { email, name, id, createdAt };
                localStorage.setItem(IS_AUTHENTICATED, JSON.stringify(isAuthenticated));
                toast.success(data.message, {
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
            } else {
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
            };
            // setTimeout(() => {
            //     window.location.href = "/home";
            // }, 1000);
        } catch (err) {
            const { message } = err.response.data;
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
            console.error(err);
            // setTimeout(() => {
            //     window.location.href = "/home";
            // }, 1000);
        };
    };

    const submitSocialMedia = async (socialMedia) => {
        try {
            const { accessToken, displayName, email, uid } = await socialMedia();

            const dataToStorage = {
                accessToken,
                displayName,
                email,
                uid
            };

            localStorage.setItem(IS_AUTHENTICATED, JSON.stringify(dataToStorage));
            window.location.href = "/home";
        } catch (err) {
            console.error("Error registrando usuario:", err);
        };
    };

    useEffect(() => {
        // const user = JSON.parse(localStorage.getItem(IS_AUTHENTICATED));

        // if (user) {
        //     window.location.href = "/home";
        // };

        setTimeout(() => {
            setLoading(false);
        }, 3000);

    }, []);


    return (
        <div className="container-login">
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
            {
                loading ?
                    <LoadingLogo />
                    :
                    // <form className="form-login" onSubmit={submitData}>
                    <form className="form-login" onSubmit={fakeSubmit}>
                        <div className="title-login">
                            <Link to="/">
                                <img className="login-logo" src={logoFull} alt="LOG" />
                            </Link>
                            <div className="text-login-container">
                                <p className="text-welcome">Bienvenido(a)</p>
                                <p className="text-carbon">Soy carbono neutro</p>
                            </div>
                        </div>
                        <div className="container-input-form-login">
                            <label className="input-title" htmlFor="user">
                                Usuario:
                            </label>
                            <input
                                className="input-form"
                                type="text"
                                id="user"
                                name="user"
                                onChange={changeData}
                            />
                        </div>
                        <div className="container-input-form-login">
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
                        <div className="link-container">
                            {/* <Link to="/initQuestions"> */}
                            <input
                                type="submit"
                                value="Iniciar sesión"
                                className="btn-green-login"
                                disabled={
                                    formData.user === "" ||
                                    formData.password === "" ||
                                    formData.password.length < 7
                                }
                            />
                            {/* </Link> */}
                        </div>
                        <div className="container-social-media">
                            <span>Iniciar sesión con: </span>
                            <div className="container-btn-social-media">
                                <img src={iconGoogle} alt='GS' className="btn-social-media"
                                    onClick={() => submitSocialMedia(loginWithGoogle)}
                                // onClick={() => alert("TAMB")}
                                />
                                <img src={iconFacebook} alt='FB' className="btn-social-media"
                                    onClick={() => submitSocialMedia(loginWithFacebook)}
                                // onClick={() => alert("TAMB")}
                                />
                            </div>
                        </div>
                        <div className="container-social-media">
                            <Link to="/registerForm">
                                <span style={{ cursor: "pointer" }}>¿No tienes cuenta? Crear una</span>
                            </Link>
                        </div>
                    </form>
            }
        </div>
    );
};

export default Login;