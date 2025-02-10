// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyB890wnKPBKgIrUQ1jxpqsYxsOu1Cp-o-4",
  authDomain: "push-notifications-tao.firebaseapp.com",
  projectId: "push-notifications-tao",
  storageBucket: "push-notifications-tao.firebasestorage.app",
  messagingSenderId: "487010689074",
  appId: "1:487010689074:web:d95eceab3c28ad43091c2b",
  measurementId: "G-YD42B8FPX9"
};

// Inicializa Firebase en el service worker
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Maneja las notificaciones cuando la app está en segundo plano
messaging.onBackgroundMessage((payload) => {
  console.log('Mensaje en segundo plano recibido: ', payload);
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: payload.notification.icon,
  });
});
