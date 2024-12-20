import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './style.css';

const ModalConfirmLogout = ({ showModal, handleClose, handleConfirm }) => {
    return (
        // <Modal className="modal-confirm-logout" show={showModal} onHide={handleClose} centered size="sm">
        <Modal show={showModal} onHide={handleClose} centered size="sm">
            <Modal.Body>
                <div style={{ padding: "1vh 0" }}>
                    <p style={{ padding: "0 0 1vh 0" }}><strong>¡Un segundo, estás a punto de salir!</strong></p>
                    <p>
                        Tu colaboración es vital para mitigar la huella de carbono.
                        ¿Estás seguro de que deseas cerrar sesión?
                    </p>
                </div>
                <div className="d-flex justify-content-between">
                    <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
                    <Button variant="success" onClick={handleConfirm}>Cerrar sesión</Button>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default ModalConfirmLogout;