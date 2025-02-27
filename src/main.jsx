import { scheduleNotification } from './helpers/pushNotifications.js';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import { fetchNotifications, listenNotifications, saveNotification } from './helpers/firebaseConfig.js';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const { VITE_AUTH0_CLIENT_ID, VITE_AUTH0_DOMAIN } = import.meta.env;

// Registrar el Service Worker si es compatible
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
        console.log("Service Worker registrado y listo", registration);
    }).catch(function (error) {
        console.error("Error al registrar el Service Worker", error);
    });
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(reg => console.log('Service Worker registrado con éxito:', reg))
            .catch(err => console.log('Fallo en el registro del Service Worker:', err));

        if (Notification.permission !== "granted") {
            Notification.requestPermission().then((permission) => {
                console.log("Permission OK", permission);
            })
                .catch(err => console.error("Error in permissions", err));
        };

        listenNotifications((notification) => {
            const { type, data } = notification;
            // console.log("Notificaciones actualizadas en tiempo real:", data);
            const { timestamp, body, title, id } = data;
            scheduleNotification(timestamp.toDate(), {
                body,
                title,
                id
            }, type);
        });


        // const notificationDate = new Date(2025, 1, 27, 15, 26);
        // const notificationInfo = {
        //     title: "Test de programación",
        //     body: "Por Dios que llegue",
        //     timestamp: notificationDate,
        // };

        // saveNotification(notificationInfo)

        // scheduleNotification(notificationDate, notificationText);
    });
};

// Renderizar la aplicación
createRoot(document.getElementById('root')).render(
    <Auth0Provider
        domain={VITE_AUTH0_DOMAIN}
        clientId={VITE_AUTH0_CLIENT_ID}
        authorizationParams={{ redirect_uri: window.location.origin }}
    >
        <App />
    </Auth0Provider>
);
