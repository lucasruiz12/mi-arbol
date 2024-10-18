import React, { useState } from 'react';
import NavBar from '../../components/NavBar';
import './style.css';

const NeutralCarbon = () => {

    const [renderView, setRenderView] = useState(1);

    return (
        <>
            <NavBar />
            <div className="container-neutral-carbon">
                {
                    renderView === 1 ?
                        <>
                            <div className="container-info-text">
                                <p className="text-you-know">¿Sabías qué?</p>
                                <p className="info-you-know">Por menos de lo que te gastas en una pizza grande al mes, puedes neutralizar tu huella de carbono individual.</p>
                                <button className="btn-green" onClick={() => setRenderView(2)}>Saber más</button>
                            </div>
                            <div className="container-info-pizza">
                                <p className="pizza-img">Foto de la pizza</p>
                                <p className="pizza-price">$189</p>
                            </div>
                            <div className="container-info-three">
                                <p className="three-img">Foto de los árboles</p>
                                <p className="three-price">$149</p>
                            </div>
                        </>
                        :
                        <>
                            <p>Preparar vista 2</p>
                        </>
                }
            </div>
        </>
    );
};

export default NeutralCarbon;