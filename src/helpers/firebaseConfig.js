import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// const {
//   VITE_FIREBASE_API_KEY,
//   VITE_FIREBASE_AUTH_DOMAIN,
//   VITE_FIREBASE_PROJECT_ID,
//   VITE_FIREBASE_STORAGE_BUCKET,
//   VITE_FIREBASE_MESSAGING_SENDER_ID,
//   VITE_FIREBASE_APP_ID,
//   VITE_FIREBASE_MEASUREMENT_ID,
//   VITE_FIREBASE_VAPID_KEY
// } = import.meta.env;


const firebaseConfig = {
  apiKey: "AIzaSyB890wnKPBKgIrUQ1jxpqsYxsOu1Cp-o-4",
  authDomain: "push-notifications-tao.firebaseapp.com",
  projectId: "push-notifications-tao",
  storageBucket: "push-notifications-tao.firebasestorage.app",
  messagingSenderId: "487010689074",
  appId: "1:487010689074:web:d95eceab3c28ad43091c2b",
  measurementId: "G-YD42B8FPX9"
};

// const firebaseConfig = {
//   apiKey: VITE_FIREBASE_API_KEY,
//   authDomain: VITE_FIREBASE_AUTH_DOMAIN,
//   projectId: VITE_FIREBASE_PROJECT_ID,
//   storageBucket: VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: VITE_FIREBASE_APP_ID,
//   measurementId: VITE_FIREBASE_MEASUREMENT_ID,
// };

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// Solicitar permisos para las notificaciones
export const requestPermission = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      console.log("Permiso concedido");
      const token = await getToken(messaging, {
        vapidKey: "BEQJfwK_mB7bhd8i8BJrDYOg0ipWHrPeSJaU3rhUlljDkMNRzs5uPmZNOgVcIL2XM2qErcw-fYEg4WSG364hIuc",
        // vapidKey: VITE_FIREBASE_VAPID_KEY,
      });
      console.log("Token FCM:", token);

      if (token) {
        await subscribeToTopic(token);
      };

      return token;
    } else {
      console.log("Permiso denegado");
    }
  } catch (error) {
    console.error("Error obteniendo el token:", error);
  }
};

const subscribeToTopic = async (token) => {

  const { VITE_FIREBASE_TOPIC } = import.meta.env;

  try {
    const response = await fetch(`https://iid.googleapis.com/iid/v1/${token}/rel/topics/${VITE_FIREBASE_TOPIC}`, {
      method: 'POST',
      headers: {
        Authorization: 'key=AIzaSyB890wnKPBKgIrUQ1jxpqsYxsOu1Cp-o-4',
        //   Authorization: `key=${VITE_FIREBASE_API_KEY}`
      },
    });
    const data = await response.json();
    console.log("Suscripción al topic:", data);
  } catch (error) {
    console.error("Error al suscribirse al topic:", error);
  }
};

// Escuchar notificaciones en primer plano
onMessage(messaging, (payload) => {
  console.log("Notificación recibida:", payload);
  new Notification(payload.notification.title, {
    body: payload.notification.body,
    icon: payload.notification.icon,
  });
});

export { messaging };