import { auth } from './firebase';
import {
    GoogleAuthProvider,
    FacebookAuthProvider,
    // OAuthProvider,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
} from 'firebase/auth';

// Sign-up functions

export const signUpWithEmail = async (email, password, name) => {
    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);

        await updateProfile(user, {
            displayName: name,
        });

        return user;
    } catch (error) {
        console.log("err", error);
        console.error('Error al crear cuenta con email:', error);
        throw error;
    };
};

export const signUpWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
        const { user } = await signInWithPopup(auth, provider);
        return user; // Devuelve el usuario recién creado o existente
    } catch (error) {
        console.error('Error al crear cuenta con Google:', error);
        throw error;
    };
};

// export const signUpWithApple = async () => {
//     const provider = new OAuthProvider('apple.com');
//     try {
//         const { user } = await signInWithPopup(auth, provider);
//         return user; // Devuelve el usuario recién creado o existente
//     } catch (error) {
//         console.error('Error al crear cuenta con Apple:', error);
//         throw error;
//     };
// };

export const signUpWithFacebook = async () => {
    const provider = new FacebookAuthProvider();
    try {
        const { user } = await signInWithPopup(auth, provider);
        return user; // Devuelve el usuario recién creado o existente
    } catch (error) {
        console.error('Error al crear cuenta con Facebook:', error);
        throw error;
    };
};

// Login functions

export const loginWithEmail = async (email, password) => {
    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        return user; // Devuelve el usuario
    } catch (error) {
        console.error('Error al iniciar sesión con email:', error);
        throw error;
    };
};

export const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
        const { user } = await signInWithPopup(auth, provider);
        return user; // Devuelve el usuario
    } catch (error) {
        console.error('Error al iniciar sesión con Google:', error);
        throw error;
    };
};

export const loginWithFacebook = async () => {
    const provider = new FacebookAuthProvider();
    try {
        const { user } = await signInWithPopup(auth, provider);
        return user; // Devuelve el usuario
    } catch (error) {
        console.error('Error al iniciar sesión con Facebook:', error);
        throw error;
    };
};

// export const loginWithApple = async () => {
//     const provider = new OAuthProvider('apple.com');
//     try {
//         const { user } = await signInWithPopup(auth, provider);
//         return user; // Devuelve el usuario
//     } catch (error) {
//         console.error('Error al iniciar sesión con Apple:', error);
//         throw error;
//     };
// };

// Logout function

export const logout = async () => {
    try {
        await signOut(auth);
        localStorage.clear();
        window.location.href = "/";
    } catch (error) {
        console.error('Error al cerrar sesión:', error);
        throw error;
    };
};
