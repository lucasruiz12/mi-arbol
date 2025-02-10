import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import { requestPermission } from './helpers/firebaseConfig.js';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const { VITE_AUTH0_CLIENT_ID, VITE_AUTH0_DOMAIN } = import.meta.env;

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(
            (registration) => {
                console.log('Service Worker registrado con éxito:', registration);
                requestPermission();
            },
            (error) => {
                console.log('Fallo en el registro del Service Worker:', error);
            }
        );
    });
};

createRoot(document.getElementById('root')).render(
    <Auth0Provider
        domain={VITE_AUTH0_DOMAIN}
        clientId={VITE_AUTH0_CLIENT_ID}
        authorizationParams={{
            redirect_uri: window.location.origin
        }}
    >
        <App />
    </Auth0Provider>
);