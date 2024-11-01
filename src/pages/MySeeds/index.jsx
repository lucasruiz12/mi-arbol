import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import LoadingLogo from '../../components/LoadingLogo';
import './style.css';

const MySeeds = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <div className="container-my-seeds">
            <NavBar />
            {
                loading ?
                    <LoadingLogo />
                    :
                    <div>MySeeds</div>
            }
        </div>
    );
};

export default MySeeds;