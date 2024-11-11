import React from 'react';
import Login from '../../components/Login';
import loginVideo from '../../assets/videos/3. siembra.mp4';
import './style.css'

const LoginForm = () => {
    return (
        <div className="container-login-form">
            <video autoPlay muted loop className="login-video">
                <source src={loginVideo} type="video/mp4" />
            </video>
            <Login />
        </div>
    );
};

export default LoginForm;