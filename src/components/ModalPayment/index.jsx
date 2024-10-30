import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import './style.css';


const ModalPayment = ({ showModal, hideModal, linkPayment }) => {

    const [currentEmail, setCurrentEmail] = useState("");

    useEffect(() => {
        const sessionEmail = "juan@luis.com";
        // const sessionEmail = JSON.parse(localStorage.getItem("sessionEmail"));
        setCurrentEmail(sessionEmail);
    },[]);

    return (
        <Modal size="lg" backdrop={"static"} show={showModal} onHide={hideModal}>
            <Modal.Header>
                <h3 className="modal-payment-title">
                    Contratar plan
                </h3>
                <button className="btn-close-modal" onClick={() => hideModal()}>
                    {/* <img src={closeModal} alt="X" /> */}
                    X
                </button>
            </Modal.Header>
            <Modal.Body>
                <div className="container-payment-form">
                    <div className="container-pay-request">
                        <span>¿Estás seguro que deseas contratar este plan?</span>
                    </div>
                    <div className="container-buttons-confirm">
                        <button onClick={() => window.location.href = `${linkPayment}?prefilled_email=${currentEmail}`}>Sí</button>
                        <button onClick={() => hideModal()}>No</button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default ModalPayment;