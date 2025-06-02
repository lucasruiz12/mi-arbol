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
                console.log(response.data.data)
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
                        <p className="text-my-seeds">Llevas <b>20 árboles sembrados</b></p>
                        <p className="info-my-seeds">Lo que se traduce en <b>8.25 Tons CO2 eq.</b></p>
                        <p className="info-my-seeds">En <b>7 meses</b> mitigarás toda tu huella de carbono</p>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", width: "90%" }}>
                        <div style={{ display: "flex", flexDirection: "column", width: "70%" }}>
                            <div className="container-invitation" style={{ padding: "1.5rem" }}>
                                <h1 className="title-invitation">Geolocalización de semillas</h1>
                                <ul style={{ color: "#604848", marginBottom: 0 }}>
                                    {
                                        userSeeds.map((el, idx) => {
                                            return (
                                                <li key={idx}>
                                                    <p style={{ color: "white", fontSize: "20px" }}>{el.address} - Coord: ({el.google_coordinates_lat}, {el.google_coordinates_lng})</p>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="container-invitation" style={{ padding: "1.5rem", margin: "1rem 0" }}>
                                <h1 className="title-invitation">Tipos de árboles sembrados</h1>
                                <ul style={{ color: "#604848", marginBottom: 0 }}>
                                    <li>
                                        <p style={{ color: "white", fontSize: "20px" }}>Pinus Pinea</p>

                                    </li>
                                    <li>
                                        <p style={{ color: "white", fontSize: "20px" }}>Pinus elliottii</p>

                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", width: "30%", justifyContent: "center" }}>
                            <div className="container-invitation" style={{ padding: "1.5rem", height: "100%", width: "95%", margin: "0 1rem 1rem 1rem" }}>
                                <p style={{ color: "white" }}>Aquí verás las fotos de tus etiquetas</p>
                            </div>
                        </div>
                    </div>
                    <div className="container-invitation container-btn-inscription">
                        <h1 className="title-invitation">¡Asiste a nuestra siguiente reforestación masiva!</h1>
                        <br />
                        <div className="container-invitation-button">
                            <button className="btn-green btn-seeds-info">Inscripción</button>
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