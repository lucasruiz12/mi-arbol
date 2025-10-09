import React, { useState } from 'react';
import './style.css';

const CoordinatesTable = () => {
  const [showModal, setShowModal] = useState(false);

  // Datos de ejemplo - en producción vendría de una API
  const sampleData = [
    { lat: '19.4326', lng: '-99.1332', type: 'Pinus Pinea' },
    { lat: '19.4328', lng: '-99.1334', type: 'Quercus Robur' },
    { lat: '19.4330', lng: '-99.1336', type: 'Pinus Elliottii' },
    { lat: '19.4332', lng: '-99.1338', type: 'Alnus Glutinosa' },
    { lat: '19.4334', lng: '-99.1340', type: 'Eucalyptus Globulus' },
    { lat: '19.4336', lng: '-99.1342', type: 'Pinus Pinea' },
    { lat: '19.4338', lng: '-99.1344', type: 'Quercus Robur' },
    { lat: '19.4340', lng: '-99.1346', type: 'Pinus Elliottii' },
    { lat: '19.4342', lng: '-99.1348', type: 'Alnus Glutinosa' },
    { lat: '19.4344', lng: '-99.1350', type: 'Eucalyptus Globulus' }
  ];

  // Mostrar solo las primeras 2 filas en la tabla principal
  const previewData = sampleData.slice(0, 2);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="coordinates-table-container">
        <div className="table-header">
          <h6 className="table-title">Ubicaciones de árboles</h6>
          <button className="view-more-btn" onClick={openModal}>
            Ver más
          </button>
        </div>
        
        <div className="table-wrapper">
          <table className="coordinates-table">
            <thead>
              <tr>
                <th>Latitud</th>
                <th>Longitud</th>
                <th>Tipo de árbol</th>
              </tr>
            </thead>
            <tbody>
              {previewData.map((item, index) => (
                <tr key={index}>
                  <td>{item.lat}</td>
                  <td>{item.lng}</td>
                  <td>{item.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h5 className="modal-title">Todas las ubicaciones</h5>
              <button className="modal-close" onClick={closeModal}>
                ×
              </button>
            </div>
            
            <div className="modal-body">
              <CoordinatesModal data={sampleData} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Componente del modal con paginación
const CoordinatesModal = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="coordinates-modal">
      <div className="modal-table-wrapper">
        <table className="modal-table">
          <thead>
            <tr>
              <th>Latitud</th>
              <th>Longitud</th>
              <th>Tipo de árbol</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item, index) => (
              <tr key={startIndex + index}>
                <td>{item.lat}</td>
                <td>{item.lng}</td>
                <td>{item.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {totalPages > 1 && (
        <div className="pagination">
          <button 
            className="pagination-btn" 
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
          >
            ← Anterior
          </button>
          
          <div className="pagination-info">
            Página {currentPage} de {totalPages}
          </div>
          
          <button 
            className="pagination-btn" 
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
          >
            Siguiente →
          </button>
        </div>
      )}
    </div>
  );
};

export default CoordinatesTable;
