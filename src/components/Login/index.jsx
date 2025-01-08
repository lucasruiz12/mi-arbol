import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { loginWithEmail, loginWithGoogle, loginWithFacebook } from '../../firebase/connections';
import { IS_AUTHENTICATED } from '../../helpers/constants';
import logoFull from '../../assets/logos/logo-TAO-brown.svg';
import iconGoogle from '../../assets/icons/rrss-google.svg';
import iconFacebook from '../../assets/icons/rrss-facebook.svg';
import loginConnections from '../../helpers/loginConnections';
import { Spinner } from 'react-bootstrap';
import { toast, ToastContainer, Bounce } from 'react-toastify';
import { useAuth0 } from '@auth0/auth0-react';
import './style.css';

const Login = () => {

    const { loginWithRedirect } = useAuth0();

    const [formData, setFormData] = useState({
        user: "",
        password: "",
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

                setTimeout(() => {
                    setLoading(false);
                    window.location.href = "/home"
                }, 2000);

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
            console.log(err.response);
            const { message } = err.response.data;
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

    const fakeSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => {
            window.location.href = "/home";
        }, 1000);
    };

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem(IS_AUTHENTICATED));

        if (user) {
            window.location.href = "/home";
        };

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
            {/* <form className="form-login" onSubmit={fakeSubmit}> */}
            <form className="form-login" onSubmit={submitData}>
                <div className="title-login">
                    <img className="login-logo" src={logoFull} alt="LOG" />
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
                    {
                        loading ?
                            <button className="btn-green-login">
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
                                value="Iniciar sesión"
                                className={`btn-green-login${(formData.user === "" ||
                                    formData.password === "" ||
                                    formData.password.length < 7) ? " disabled" : ""}`}
                                disabled={
                                    formData.user === "" ||
                                    formData.password === "" ||
                                    formData.password.length < 7
                                }
                            />
                    }
                    {/* </Link> */}
                </div>
                <div className="container-social-media">
                    <span>Iniciar sesión con: </span>
                    <div className="container-btn-social-media">
                        <img src={iconGoogle} alt='GS' className="btn-social-media"
                            // onClick={() => submitSocialMedia(loginWithGoogle)}
                            onClick={() => loginWithRedirect({ redirectUri: window.location.origin + "/loadingUser" })}
                        />
                        <img src={iconFacebook} alt='FB' className="btn-social-media"
                            // onClick={() => submitSocialMedia(loginWithFacebook)}
                            onClick={() => loginWithRedirect({ redirectUri: window.location.origin + "/loadingUser" })}
                        />
                    </div>
                </div>
                <div className="container-social-media">
                    <Link to="/registerForm">
                        <span style={{ cursor: "pointer" }}>¿No tienes cuenta? Crear una</span>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Login;