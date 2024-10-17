import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const auth = getAuth();
const db = getFirestore();

async function signUp(email, password, additionalData) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        await setDoc(doc(db, "users", user.uid), {
            email: user.email,
            name: additionalData.name,
            lastname: additionalData.lastname,
            city: additionalData.city,
            state: additionalData.state,
            phone: additionalData.phone,
            createdAt: new Date(),
        });

        console.log("Usuario registrado con datos adicionales");
    } catch (error) {
        console.error("Error en el registro: ", error);
    };
};

export {
    signUp,

};
