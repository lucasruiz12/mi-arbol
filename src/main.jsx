import { createRoot } from 'react-dom/client';
import App from './App.jsx';
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

createRoot(document.getElementById('root')).render(<App />);
