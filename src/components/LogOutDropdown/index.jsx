import React from 'react';
import { Dropdown } from 'react-bootstrap';
import './style.css';

const LogOutDropdown = ({ logout }) => {
    return (
        <Dropdown className="navbar-logout">
            <Dropdown.Toggle id="dropdown-basic" style={{ background: "#A4C73D", border: "none" }}>
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item style={{ color: "#604848", fontFamily: "Open Sans, serif !important" }} onClick={() => logout()}>Cerrar sesión</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default LogOutDropdown;