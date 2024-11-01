// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyByZbc0HTZm1F1JHgpd-t4lckWS9O7p43s",
    authDomain: "mi-arbol-log.firebaseapp.com",
    projectId: "mi-arbol-log",
    storageBucket: "mi-arbol-log.appspot.com",
    messagingSenderId: "747305447877",
    appId: "1:747305447877:web:1f0df1829e7b47160c1bac"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
