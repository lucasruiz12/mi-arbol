import React from 'react';
import { Modal } from 'react-bootstrap';
import './style.css';


const ModalPayment = ({ showModal, hideModal }) => {
    return (
        <Modal size="lg" backdrop={"static"} show={showModal} onHide={hideModal}>
            <Modal.Header>
                <h3 className="modal-payment-title">
                    Opciones de pago
                </h3>
                <button className="btn-close-modal" onClick={() => hideModal()}>
                    {/* <img src={closeModal} alt="X" /> */}
                    X
                </button>
            </Modal.Header>
            <Modal.Body>
                <div className="container-payment-form">
                    <div className="container-pay-with-card">
                        <div>
                            <input type="radio" id="card-payment" name="card-payment" value="card" />
                            <label htmlFor="card-payment">Tarjeta de crédito / débito</label>
                        </div>
                        <div className="container-images-cards">
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default ModalPayment;