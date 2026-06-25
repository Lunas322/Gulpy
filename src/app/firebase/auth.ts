import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "./firebase";
import { doc, setDoc } from "firebase/firestore";
import { db } from "./firestore";
export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export const handleGoogleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const userData = result.user;

    await setDoc(doc(db, "users", userData.uid), {
      uid: userData.uid,
      name: userData.displayName,
      email: userData.email,
      createdAt: new Date(),
    });
    return userData;
  } catch (error) {
    console.error(error);
  }
};

export const handleGoogleLogout = async () => {
  try {
    signOut(auth);
  } catch (erro) {
    console.log(erro);
  }
};
