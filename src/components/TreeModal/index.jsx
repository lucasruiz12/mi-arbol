import React from 'react';
import './style.css';

const TreeModal = ({ tree, onClose }) => {
    return (
        <div className="tree-modal-overlay" onClick={onClose}>
            <div className="tree-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="tree-modal-close" onClick={onClose}>
                    ×
                </button>
                
                <div className="tree-modal-body">
                    <div className="tree-modal-image-container">
                        <img 
                            src={tree.image} 
                            alt={tree.name}
                            className="tree-modal-image"
                        />
                    </div>
                    
                    <div className="tree-modal-info">
                        <h3 className="tree-modal-title">{tree.name}</h3>
                        <h5 className="tree-modal-common-name">{tree.commonName}</h5>
                        
                        <div className="tree-modal-description">
                            <p>{tree.description}</p>
                        </div>
                        
                        <div className="tree-modal-characteristics">
                            <h6 className="characteristics-title">Características:</h6>
                            <ul className="characteristics-list">
                                {tree.characteristics.map((characteristic, index) => (
                                    <li key={index}>{characteristic}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TreeModal;

