import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { loginWithEmail, loginWithGoogle, loginWithFacebook } from '../../firebase/connections';
import { IS_AUTHENTICATED } from '../../helpers/constants';
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
        // console.log(formData);
        try {
            const { accessToken, displayName, email, uid } = await loginWithEmail(formData.user, formData.password);

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
        const user = JSON.parse(localStorage.getItem(IS_AUTHENTICATED));

        if (user) {
            window.location.href = "/home";
        };

        setTimeout(() => {
            setLoading(false);
        }, 1000);

    }, []);


    return (
        <div className="container-login">
            {
                loading ?
                    <p>Cargando</p>
                    :
                    <form className="form-login" onSubmit={submitData}>
                        <div className="title-login">
                            <Link to="/">
                                <p>Mi árbol</p>
                            </Link>
                            <div className="text-login-container">
                                <p className="text-welcome">Bienvenido(a)</p>
                                <p className="text-carbon">Soy carbono neutro</p>
                            </div>
                        </div>
                        <div className="container-input-form">
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
                        <div className="link-container">
                            {/* <Link to="/initQuestions"> */}
                            <input
                                type="submit"
                                value="Iniciar sesión"
                                className="btn-green"
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
                                <button className="btn-social-media" type="button" onClick={() => submitSocialMedia(loginWithGoogle)}>G</button>
                                <button className="btn-social-media" type="button" onClick={() => submitSocialMedia(loginWithFacebook)}>F</button>
                                {/* <button className="btn-social-media" type="button" onClick={() => console.log("Apple")}>A</button> */}
                            </div>
                        </div>
                        <div className="container-social-media">
                            <Link to="/registerForm">
                                <span style={{ cursor: "pointer" }}>Crear cuenta</span>
                            </Link>
                        </div>
                    </form>
            }
        </div>
    );
};

export default Login;