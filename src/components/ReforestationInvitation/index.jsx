import React, { useState } from 'react';
import './style.css';

const ReforestationInvitation = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            // Aquí puedes agregar la lógica para enviar el email
            console.log('Email enviado:', email);
            setEmail('');
        }
    };

    return (
        <div className="reforestation-invitation-card">
            {/* Sección izquierda - Contenido */}
            <div className="invitation-content">
                <h2 className="invitation-title">¡Estás Invitado!</h2>
                <p className="invitation-subtitle">Únete a nuestra próxima reforestación</p>
                
                <form className="invitation-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="email"
                            placeholder="Ingresa tu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="email-input"
                            required
                        />
                        <button type="submit" className="join-button">
                            Únete Ahora
                        </button>
                    </div>
                </form>
                
                <p className="form-hint">Recibirás información sobre fechas y ubicaciones</p>
                
                <p className="made-by">
                    Hecho con 🌳 por <span className="company-name">TAO</span>
                </p>
            </div>

            {/* Sección derecha - Imagen */}
            <div className="invitation-image">
                <div className="image-overlay">
                    <div className="image-content">
                        <h3>🌱 Reforestación Masiva</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReforestationInvitation;
