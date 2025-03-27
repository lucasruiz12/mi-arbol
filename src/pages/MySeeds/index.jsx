import React, { useEffect, useState } from 'react';
import { IS_AUTHENTICATED } from '../../helpers/constants';
import loginConnections from '../../helpers/loginConnections';
import NavBar from '../../components/NavBar';
import MapView from '../../components/MapView';
// import BackPages from '../../components/BackPages';
// import LoadingLogo from '../../components/LoadingLogo';
import './style.css';

const MySeeds = () => {

    const [loading, setLoading] = useState(true);
    const [userSeeds, setUserSeeds] = useState([]);
    const [center, setCenter] = useState({
        lat: "",
        lng: "",
    })

    useEffect(() => {
        const user_id = JSON.parse(localStorage.getItem(IS_AUTHENTICATED)).id;
        loginConnections.getSeedsByUserId(user_id).then(response => {
            if (response.data.success) {
                const lat = response.data.data.reduce((acc, el) => acc + parseFloat(el.google_coordinates_lat), 0) / response.data.data.length;
                const lng = response.data.data.reduce((acc, el) => acc + parseFloat(el.google_coordinates_lng), 0) / response.data.data.length;
                setCenter({ lat, lng });

                setUserSeeds(response.data.data);
                setTimeout(() => {
                    setLoading(false);
                }, 1500);
            };
        })
            .catch(err => {
                setTimeout(() => {
                    setLoading(false);
                }, 2500);
                console.error(err)
            });
    }, []);

    return (
        <div className="container-my-seeds">
            <NavBar />
            <div className="container-my-seeds-content">
                <div className="container-seeds-text">
                    <div>
                        <p className="text-my-seeds">¡Te damos la bienvenida!</p>
                        <p className="info-my-seeds">En esta sección encontrarás la <b>geolocalización de tus semillas.</b></p>
                        <p className="info-my-seeds">Recuerda que con tu aporte estás <b>contribuyendo a disminuir</b> los daños ocasionados por la contaminación de cientos de tons de <b>CO2 Eq!</b></p>
                        {/* <p className="info-my-seeds">Te invitamos a ser parte de <b>nuestro próximo evento de reforestación!</b></p> */}
                    </div>
                    <div className="container-invitation">
                        <h1 className="title-invitation">Próximo evento de reforestación</h1>
                        <br />
                        <div className="info-invitation">
                            <div className="date-invitation">
                                <h4 className="date-invitation-day">1</h4>
                                <p className="date-invitation-month">may</p>
                            </div>
                            <div className="columns-invitation">
                                <h4 className="title-invitation">Reforestación CDMX</h4>
                                <br />
                                <div className="columns-invitation">
                                    <p className="text-invitation">Jueves, 1 de mayo de 2025</p>
                                    <p className="text-invitation">11:00hs., Vivero Coyoacán,</p>
                                    <p className="text-invitation">Ciudad de México</p>
                                </div>
                            </div>
                            <div className="container-invitation-button">
                                <button className="btn-green btn-seeds-info">Asistir</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-seeds-map">
                    <h2 className="seeds-map-title">Aquí podrás ver tus semillas</h2>
                    <div className="seeds-map-wrapper">
                        <MapView loading={loading} markers={userSeeds} center={center} />
                    </div>
                    <div className="container-btn-more-info">
                        <button className="btn-green btn-seeds-info" onClick={() => window.open("https://taosolutions.com.mx/")}>Saber más de nosotros</button>
                    </div>
                </div>
            </div>
            {/* <BackPages goToPage="/home" /> */}
        </div>
    );
};

export default MySeeds;