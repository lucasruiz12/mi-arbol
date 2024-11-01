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
export const signUpWithEmail = async (email, password, name) => {
    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(user, { displayName: name });
        console.log("ESTE ES USER", user);
        await saveUserProfile(user.uid, { name });
        return user;
    } catch (error) {
        console.error('Error al crear cuenta con email:', error);
        throw error;
    }
};

const signInWithProvider = async (provider) => {
    try {
        const { user } = await signInWithPopup(auth, provider);
        return user;
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        throw error;
    }
};

export const signUpWithGoogle = async () => signInWithProvider(new GoogleAuthProvider());
export const signUpWithFacebook = async () => signInWithProvider(new FacebookAuthProvider());
// export const signUpWithApple = async () => signInWithProvider(new OAuthProvider('apple.com'));

// Login functions
export const loginWithEmail = async (email, password) => {
    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        return user;
    } catch (error) {
        console.error('Error al iniciar sesión con email:', error);
        throw error;
    }
};

export const loginWithGoogle = async () => signInWithProvider(new GoogleAuthProvider());
export const loginWithFacebook = async () => signInWithProvider(new FacebookAuthProvider());
// export const loginWithApple = async () => signInWithProvider(new OAuthProvider('apple.com'));

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
