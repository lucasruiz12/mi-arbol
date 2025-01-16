import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { IS_AUTHENTICATED } from '../../helpers/constants';
import './style.css';

const LogOutDropdown = ({ openModal }) => {

    const navigate = useNavigate();

    return (
        <Dropdown className="navbar-logout">
            <Dropdown.Toggle className="dropdown-nav" id="dropdown-basic" style={{ background: "#A4C73D", border: "none" }}>
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {
                    JSON.parse(localStorage.getItem(IS_AUTHENTICATED))?.subscription && <Dropdown.Item style={{ color: "#604848", fontFamily: "Open Sans, serif !important" }} onClick={() => navigate("/mySubscription")}>Ver mi subscripción</Dropdown.Item>
                }
                <Dropdown.Item style={{ color: "#604848", fontFamily: "Open Sans, serif !important" }} onClick={() => openModal()}>Cerrar sesión</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default LogOutDropdown;