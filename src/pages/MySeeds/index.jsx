import React, { useEffect, useState } from 'react';
import { IS_AUTHENTICATED } from '../../helpers/constants';
import loginConnections from '../../helpers/loginConnections';
import NavBar from '../../components/NavBar';
import MapView from '../../components/MapView';
import './style.css';
import moment from 'moment';

const MySeeds = () => {
  const [loading, setLoading] = useState(true);
  const [userSeeds, setUserSeeds] = useState([]);
  const [center, setCenter] = useState({ lat: 0, lng: 0 });

  const subscription = JSON.parse(localStorage.getItem(IS_AUTHENTICATED))?.subscription;
  const subscriptionDate = moment(subscription?.created_at, 'DD/MM/YYYY HH:mm');
  const nowDate = moment();
  const totalMonth = (nowDate.year() - subscriptionDate.year()) * 12 + (nowDate.month() - subscriptionDate.month()) + 1;
  const totalTrees = Math.ceil((subscription?.amount || 0) / 12 / 3.5) * totalMonth;
  const tonsMitigated = totalTrees * 0.08;
  const tonsToMitigate = Math.max(0, (JSON.parse(localStorage.getItem(IS_AUTHENTICATED))?.carbonPoints || 0) - tonsMitigated);
  const countdown = Math.ceil(tonsToMitigate / (Math.ceil((subscription?.amount || 0) / 12 / 3.5) * 0.08)) || 0;

  const calculateData = () => {
    console.log('Countdown:', countdown);
    console.log('Tons por mes:', totalTrees * 0.08);
    // TODO: Agregar funcionalidad si es necesario
  };

  useEffect(() => {
    const user_id = JSON.parse(localStorage.getItem(IS_AUTHENTICATED))?.id;
    if (!user_id) {
      setLoading(false);
      return;
    }
    loginConnections
      .getSeedsByUserId(user_id)
      .then((response) => {
        if (response.data.success && response.data.data.length > 0) {
          const lat = response.data.data.reduce((acc, el) => acc + parseFloat(el.google_coordinates_lat), 0) / response.data.data.length;
          const lng = response.data.data.reduce((acc, el) => acc + parseFloat(el.google_coordinates_lng), 0) / response.data.data.length;
          setCenter({ lat, lng });
          setUserSeeds(response.data.data);
        }
        setTimeout(() => setLoading(false), 1500);
      })
      .catch((err) => {
        console.error(err);
        setTimeout(() => setLoading(false), 2500);
      });
  }, []);

  return (
    <div className="container-my-seeds">
      <NavBar />
      <div className="container-my-seeds-content">
        <div className="container-seeds-text">
          <div className="stats-section">
            <p className="text-my-seeds">
              Llevas <b>{totalTrees} árboles sembrados</b>
            </p>
            <p className="info-my-seeds">
              Lo que se traduce en <b>{tonsMitigated.toFixed(2)} Tons CO2 eq.</b>
            </p>
            <p className="info-my-seeds">
              En <b>{countdown} {countdown !== 1 ? 'meses' : 'mes'}</b> mitigarás toda tu huella de carbono
            </p>
          </div>
          <div className="details-section">
            <div className="details-left">
              <div className="container-invitation">
                <h1 className="title-invitation">Geolocalización de semillas</h1>
                <ul>
                  {userSeeds.length > 0 ? (
                    userSeeds.map((el, idx) => (
                      <li key={idx}>
                        <p className="info-text">{el.address} - Coord: ({el.google_coordinates_lat}, {el.google_coordinates_lng})</p>
                      </li>
                    ))
                  ) : (
                    <p className="info-text">No hay semillas registradas.</p>
                  )}
                </ul>
              </div>
              <div className="container-invitation">
                <h1 className="title-invitation">Tipos de árboles sembrados</h1>
                <ul>
                  <li>
                    <p className="info-text">Pinus Pinea</p>
                  </li>
                  <li>
                    <p className="info-text">Pinus elliottii</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="details-right">
              <div className="container-invitation">
                <p className="info-text">Aquí verás las fotos de tus etiquetas</p>
              </div>
            </div>
          </div>
          <div className="container-invitation container-btn-inscription">
            <h1 className="title-invitation">¡Asiste a nuestra siguiente reforestación masiva!</h1>
            <div className="container-invitation-button">
              <button className="btn-green btn-seeds-info" onClick={calculateData}>
                Inscripción
              </button>
            </div>
          </div>
        </div>
        <div className="container-seeds-map">
          <h2 className="seeds-map-title">Aquí podrás ver tus semillas</h2>
          <div className="seeds-map-wrapper">
            <MapView loading={loading} markers={userSeeds} center={center} />
          </div>
          <div className="container-btn-more-info">
            <button className="btn-green btn-seeds-info" onClick={() => window.open('https://taosolutions.com.mx/')}>
              Saber más de nosotros
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySeeds;