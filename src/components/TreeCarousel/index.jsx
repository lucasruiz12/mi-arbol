import React, { useState, useRef } from 'react';
import TreeModal from '../TreeModal';
import './style.css';

const TreeCarousel = () => {
    const [selectedTree, setSelectedTree] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const carouselRef = useRef(null);

    const trees = [
        {
            id: 1,
            name: 'Pinus Pinea',
            commonName: 'Pino Piñonero',
            image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=400',
            description: 'Árbol de hoja perenne de la familia de las pináceas, típico del Mediterráneo.',
            characteristics: [
                'Altura: 12-30 metros',
                'Clima: Templado mediterráneo',
                'Captura de CO2: Alta',
                'Crecimiento: Medio-lento',
                'Longevidad: 200-300 años'
            ]
        },
        {
            id: 2,
            name: 'Pinus Elliottii',
            commonName: 'Pino Elliotti',
            image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400',
            description: 'Pino del sureste de Estados Unidos, conocido por su rápido crecimiento y adaptabilidad.',
            characteristics: [
                'Altura: 18-30 metros',
                'Clima: Subtropical húmedo',
                'Captura de CO2: Muy alta',
                'Crecimiento: Rápido',
                'Longevidad: 150-200 años'
            ]
        },
        {
            id: 3,
            name: 'Quercus Robur',
            commonName: 'Roble Común',
            image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400',
            description: 'Árbol majestuoso y longevo, fundamental para los ecosistemas europeos.',
            characteristics: [
                'Altura: 20-40 metros',
                'Clima: Templado',
                'Captura de CO2: Muy alta',
                'Crecimiento: Lento',
                'Longevidad: 500-1000 años'
            ]
        },
        {
            id: 4,
            name: 'Alnus Glutinosa',
            commonName: 'Aliso Común',
            image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=400',
            description: 'Árbol caducifolio que mejora la calidad del suelo fijando nitrógeno atmosférico.',
            characteristics: [
                'Altura: 15-25 metros',
                'Clima: Templado húmedo',
                'Captura de CO2: Alta',
                'Crecimiento: Rápido',
                'Longevidad: 100-150 años'
            ]
        },
        {
            id: 5,
            name: 'Eucalyptus Globulus',
            commonName: 'Eucalipto Azul',
            image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400',
            description: 'Árbol de crecimiento rápido originario de Australia, excelente captador de CO2.',
            characteristics: [
                'Altura: 30-55 metros',
                'Clima: Templado-subtropical',
                'Captura de CO2: Muy alta',
                'Crecimiento: Muy rápido',
                'Longevidad: 150-250 años'
            ]
        }
    ];

    const handleTreeClick = (tree) => {
        setSelectedTree(tree);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedTree(null);
    };

    const handleWheel = (e) => {
        if (carouselRef.current) {
            e.preventDefault();
            carouselRef.current.scrollLeft += e.deltaY;
        }
    };

    return (
        <>
            <div className="tree-carousel-container">
                <div 
                    className="tree-carousel-scroll"
                    ref={carouselRef}
                    onWheel={handleWheel}
                >
                    {trees.map((tree) => (
                        <div 
                            key={tree.id} 
                            className="tree-card"
                            onClick={() => handleTreeClick(tree)}
                        >
                            <div className="tree-card-image-container">
                                <img 
                                    src={tree.image} 
                                    alt={tree.name}
                                    className="tree-card-image"
                                />
                            </div>
                            <div className="tree-card-info">
                                <h6 className="tree-card-name">{tree.name}</h6>
                                <p className="tree-card-common-name">{tree.commonName}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {showModal && selectedTree && (
                <TreeModal 
                    tree={selectedTree} 
                    onClose={closeModal}
                />
            )}
        </>
    );
};

export default TreeCarousel;

