import React from 'react';
import { Modal } from 'react-bootstrap';
import './style.css';

const ModalMoreInfo = ({ showModal, hideModal }) => {
    return (
        <Modal size="lg" backdrop={"static"} show={showModal} onHide={hideModal}>
            <Modal.Header>
                <h3 className="modal-more-info-title">
                    ¿Quién es TAO?
                </h3>
                <button className="btn-close-modal" onClick={() => hideModal()}>
                    X
                </button>
            </Modal.Header>
            <Modal.Body className="modal-more-info-body">
                <div className="container-more-info-text">
                    <div className="container-more-info">
                        <span className="more-info-text" style={{ fontWeight: "bold" }}>+ Raíces - Huella, surge como proyecto de TAO Solutions.</span>
                        <span className="more-info-text">Desde hace más de 5 años, somos una empresa enfocada en brindar proyectos de eficiencia energética y sustentabilidad a otras organizaciones, como medir su huella de carbono y ayudarlas a optimizar sus consumos. Es decir, las apoyamos para reducir su impacto en el planeta Tierra.</span>
                        <span className="more-info-text">En este tiempo, hemos desarrollado proyectos enfocados en el aprovechamiento de energía y agua para empresas líderes en sus sectores, como Pepsi, Hyundai, Canon, la ONU, entre otras, ayudando así a disminuir el impacto de grandes generadores de emisiones en el país.</span>
                        <span className="more-info-text">Como parte de nuestro alcance, coordinamos reforestaciones anuales de la mano con distintas comunidades para aportar nuestro granito de arena ante las emisiones que generamos como sociedad todos los días.</span>
                        <span className="more-info-text">Con + Raíces - Huella, logramos llevar la sustentabilidad al alcance de todos. La suma de pequeños esfuerzos logra cambios realmente grandes; por eso queremos que cada persona, como tú, pueda sumar en favor de un cambio positivo.</span>
                        <br />
                        <span className="more-info-text">Ayúdanos a salvar el mundo, un árbol a la vez.</span>
                        <span className="more-info-text">¡Bienvenido a + Raíces - Huella!</span>
                    </div>
                    <div className="container-buttons-confirm">
                        <button className="btn-green" onClick={() => window.open("https://taosolutions.com.mx/")}>Más información</button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default ModalMoreInfo;