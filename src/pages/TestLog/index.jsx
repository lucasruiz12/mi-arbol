import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
// import { useHistory } from 'react-router-dom'; // Importamos useHistory para manejar las redirecciones

const TestLog = () => {
    const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();
    // const history = useHistory(); // Hook para acceder al historial de navegación

    useEffect(() => {
        if (isAuthenticated) {
            // Guardar la respuesta en localStorage
            localStorage.setItem('auth0_user', JSON.stringify(user));
        }
    }, [isAuthenticated, user]);

    const handleLogout = () => {
        // Limpiar localStorage al hacer logout
        localStorage.removeItem('auth0_user');
        
        // Redirigir al usuario después de logout
        logout({ returnTo: window.location.origin + "/" });
    };

    return (
        <>
            {isLoading ? (
                <p>Cargando...</p>
            ) : isAuthenticated ? (
                <div>
                    <p>Bienvenido, {user.name}!</p>
                    <button onClick={handleLogout}>Log Out</button>
                </div>
            ) : (
                <button onClick={() => loginWithRedirect({ redirectUri: window.location.origin + "/loadingUser" })}>
                    Log In
                </button>
            )}
        </>
    );
};

export default TestLog;