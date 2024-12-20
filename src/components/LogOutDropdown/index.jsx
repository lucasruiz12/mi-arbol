import React from 'react';
import { Dropdown } from 'react-bootstrap';
import './style.css';

const LogOutDropdown = ({ openModal }) => {
    return (
        <Dropdown className="navbar-logout">
            <Dropdown.Toggle className="dropdown-nav" id="dropdown-basic" style={{ background: "#A4C73D", border: "none" }}>
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item style={{ color: "#604848", fontFamily: "Open Sans, serif !important" }} onClick={() => openModal()}>Cerrar sesión</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default LogOutDropdown;