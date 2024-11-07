import React from 'react';
import Login from '../../components/Login';
import registerVideo from '../../assets/videos/3. siembra.mp4';
import './style.css'

const LoginForm = () => {
    return (
        <div className="container-register-form">
            <video autoPlay muted loop className="register-video">
                <source src={registerVideo} type="video/mp4" />
            </video>
            <Login />
        </div>
    );
};

export default LoginForm;