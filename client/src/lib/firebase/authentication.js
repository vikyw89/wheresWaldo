import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./config";

export class FirebaseAuth {
    static auth = getAuth(app)

    static createUserWithEmailAndPassword = async (email, password) => {
        try {
            const user = await createUserWithEmailAndPassword(this.auth, email, password)
        } catch (err) {
            return { err }
        }
    }

    static signInWithEmailAndPassword = async (email, password) => {
        try {
            const userCredential = signInWithEmailAndPassword(this.auth, email, password)
            const user = await userCredential.user
            return { user }
        } catch (err) {
            return { err }
        }
    }

    static onAuthStateChanged = async () => {
        onAuthStateChanged(this.auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                // ...
            } else {
                // User is signed out
                // ...
            }
        }
    }
}