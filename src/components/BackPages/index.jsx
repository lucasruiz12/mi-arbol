import React from 'react';
import backPages from '../../assets/icons/cartoon/back-arrow.svg';
import { Link } from 'react-router-dom';
import './style.css';

const BackPages = ({ goToPage }) => {

    return (
        <div className="container-arrow-page">
            <Link to={goToPage}>
                <img className="img-arrow-back" src={backPages} alt="<=" />
            </Link>
        </div>
    );
};

export default BackPages;