import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import { IS_AUTHENTICATED } from '../../helpers/constants';
import LoadingLogo from '../../components/LoadingLogo';
import './style.css';

const Home = () => {

    const [loading, setLoading] = useState(true);
    const user = JSON.parse(localStorage.getItem(IS_AUTHENTICATED)).displayName;

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <div className="container-home">
            <NavBar />
            {
                loading ?
                    <LoadingLogo />
                    :
                    <div className="container-home-content">MyTrace {user}</div>
            }
        </div>
    );
};

export default Home;