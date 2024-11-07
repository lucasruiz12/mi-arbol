import { auth, db } from './firebase';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import {
    GoogleAuthProvider,
    FacebookAuthProvider,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
} from 'firebase/auth';
import { USERS } from '../helpers/constants';

// Firestore functions
export const saveUserProfile = async (uid, profileData) => {
    try {
        console.log("INTENTO SETEAR DOC", profileData);
        await setDoc(doc(db, USERS, uid), profileData);
        console.log('Perfil del usuario guardado correctamente.');
    } catch (error) {
        console.error('Error al guardar perfil del usuario:', error);
    }
};

export const getUserProfile = async (docId) => {
    try {
        const docRef = doc(db, USERS, docId);
        const docSnap = await getDoc(docRef);
        return docSnap.exists() ? docSnap.data() : null;
    } catch (e) {
        console.error('Error al obtener perfil:', e);
        throw e;
    }
};

export const updateUserProfile = async (docId, updatedData) => {
    try {
        const docRef = doc(db, USERS, docId);
        await updateDoc(docRef, updatedData);
        console.log('Perfil actualizado correctamente');
    } catch (e) {
        console.error('Error al actualizar perfil:', e);
        throw e;
    }
};

// Sign-up functions
export const signUpWithEmail = async (email, password, data) => {
    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        const { name } = data;
        await updateProfile(user, { displayName: name });
        await saveUserProfile(user.uid, data);
        return user;
    } catch (error) {
        console.error('Error al crear cuenta con email:', error);
        throw error;
    }
};

const signInWithProvider = async (provider, data) => {
    try {
        const { user } = await signInWithPopup(auth, provider);
        const newData = {
            ...data,
            suscription: false,
            // questions: [
            //     {
            //         id: 1,
            //         response: 1
            //     },
            //     {
            //         id: 1,
            //         response: 1
            //     },
            //     {
            //         id: 1,
            //         response: 1
            //     },
            // ]
        };

        await saveUserProfile(user.uid, newData);
        return user;
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        throw error;
    }
};

export const signUpWithGoogle = async (data) => signInWithProvider(new GoogleAuthProvider(), data);
export const signUpWithFacebook = async (data) => signInWithProvider(new FacebookAuthProvider(), data);

// Login functions
export const loginWithEmail = async (email, password) => {
    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        return user;
    } catch (error) {
        console.error('Error al iniciar sesión con email:', error);
        throw error;
    };
};

export const loginWithGoogle = async () => signInWithProvider(new GoogleAuthProvider());
export const loginWithFacebook = async () => signInWithProvider(new FacebookAuthProvider());

// Logout function
export const logout = async () => {
    try {
        await signOut(auth);
        localStorage.clear();
        window.location.href = "/";
    } catch (error) {
        console.error('Error al cerrar sesión:', error);
        throw error;
    }
};
