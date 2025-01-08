import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { Auth0Provider } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(
            (registration) => {
                console.log('Service Worker registrado con éxito:', registration);
            },
            (error) => {
                console.log('Fallo en el registro del Service Worker:', error);
            }
        );
    });
};

createRoot(document.getElementById('root')).render(
    <Auth0Provider
        domain="dev-ngx3zag6uurz6v6i.us.auth0.com"
        clientId="t4EFBtPdAIYKzSQVPsZMVzV1RduKn5KV"
        authorizationParams={{
            redirect_uri: window.location.origin
        }}
    >
        <App />
    </Auth0Provider>
);