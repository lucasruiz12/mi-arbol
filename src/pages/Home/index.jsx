import React from 'react';
import NavBar from '../../components/NavBar';
import './style.css';
import { IS_AUTHENTICATED } from '../../helpers/constants';

const Home = () => {

    const user = JSON.parse(localStorage.getItem(IS_AUTHENTICATED)).displayName;

    return (
        <div className="container-home">
            <NavBar />
            <div>MyTrace {user}</div>
        </div>
    )
}

export default Home