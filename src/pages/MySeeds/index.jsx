import React, { useEffect, useState } from 'react';
import { IS_AUTHENTICATED } from '../../helpers/constants';
import loginConnections from '../../helpers/loginConnections';
import NavBar from '../../components/NavBar';
import MapView from '../../components/MapView';
import TreeCarousel from '../../components/TreeCarousel';
import ReforestationInvitation from '../../components/ReforestationInvitation';
import CoordinatesTable from '../../components/CoordinatesTable';
import moment from 'moment';
import './style.css';

const MySeeds = () => {
  const [loading, setLoading] = useState(true);
  const [userSeeds, setUserSeeds] = useState([]);
  const [center, setCenter] = useState({ lat: 0, lng: 0 });

  const subscription = JSON.parse(localStorage.getItem(IS_AUTHENTICATED))?.subscription;
  const subscriptionDate = moment(subscription?.subscriptionDate ?? subscription?.created_at, 'DD/MM/YYYY HH:mm');
  const nowDate = moment();
  const totalMonth = (nowDate.year() - subscriptionDate.year()) * 12 + (nowDate.month() - subscriptionDate.month()) + 1;
  const totalTrees = Math.ceil((subscription?.amount || 0) / 12 / 3.5) * totalMonth;
  const tonsMitigated = totalTrees * 0.08;
  const tonsToMitigate = Math.max(0, (JSON.parse(localStorage.getItem(IS_AUTHENTICATED))?.carbonPoints || 0) - tonsMitigated);
  const countdown = Math.ceil(tonsToMitigate / (Math.ceil((subscription?.amount || 0) / 12 / 3.5) * 0.08)) || 0;
  
  // Calcular progreso para la barra (0 meses = 100% llena, más meses = menos llena)
  const maxMonths = 12; // Meses máximos para mostrar progreso
  const progressPercentage = Math.max(0, Math.min(100, ((maxMonths - (countdown || 0)) / maxMonths) * 100));

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
    <div className="container-fluid p-0">
      {/* Fila 1: NavBar */}
      <div className="row m-0">
        <div className="col-12 p-0">
          <NavBar />
        </div>
      </div>

      {/* Fila 2: Info principal y MapView */}
      <div className="row m-0 mt-4">
        {/* Columna 1: Info usuario y tipo de árboles */}
        <div className="col-12 col-lg-6 mb-4">
          {/* Fila 1 interna: Avatar e información del usuario */}
          <div className="row mb-3">
            {/* Columna 1: Foto usuario */}
            <div className="col-3 d-flex align-items-center justify-content-center">
              {/* Espacio para foto de usuario */}
              <div className="rounded-circle bg-secondary user-photo"></div>
            </div>
            {/* Columna 2: Información del usuario */}
            <div className="col-9">
              {/* Fila 1: Árboles sembrados y Mitigación */}
              <div className="row mb-2">
                <div className="col-6">
                  <h6 className="fw-bold">Árboles sembrados</h6>
                  <div>{totalTrees}</div>
                </div>
                <div className="col-6">
                  <h6 className="fw-bold">Mitigación de tons CO2 eq</h6>
                  <div>{tonsMitigated.toFixed(2)}</div>
                </div>
              </div>
              {/* Fila 2: Meses restantes con barra de progreso */}
              <div className="row mb-2">
                <div className="col-6">
                  <h6 className="fw-bold">Meses restantes</h6>
                  <div>{countdown}</div>
                </div>
                <div className="col-6">
                  <h6 className="fw-bold">Progreso</h6>
                  <div className="custom-progress">
                    <div 
                      className="custom-progress-bar" 
                      style={{ 
                        width: `${Math.max(2, progressPercentage)}%`,
                        backgroundColor: '#c0d860'
                      }}
                    >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Fila 2 interna: Tipo de árboles */}
          <div className="row">
            <div className="col-12">
              <h5 className="fw-bold mb-3">Tipo de árboles</h5>
              <TreeCarousel />
            </div>
          </div>
        </div>
        {/* Columna 2: Título y MapView */}
        <div className="col-12 col-lg-6 mb-4 d-flex flex-column justify-content-between min-vh-70">
          <div className="row h-100">
            <div className="col-12">
              <h4 className="fw-bold">Aquí podrás ver tus semillas</h4>
            </div>
            <div className="col-12 flex-grow-1 d-flex align-items-stretch">
              <MapView loading={loading} markers={userSeeds} center={center} style={{ minHeight: '450px', width: '100%' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Fila 3: Anuncio de reforestación y tabla de coordenadas */}
      <div className="row m-0 mt-3">
        <div className="col-12 col-lg-6 mb-3">
          <ReforestationInvitation />
        </div>
        <div className="col-12 col-lg-6 mb-3">
          <CoordinatesTable />
        </div>
      </div>
    </div>
  );
};

export default MySeeds;