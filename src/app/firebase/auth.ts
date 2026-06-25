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
  const result = await signInWithPopup(auth, provider);
  const userData = result.user;
  try {
    await setDoc(
      doc(db, "users", userData.uid),
      {
        uid: userData.uid,
        name: userData.displayName,
        email: userData.email,
      },
      { merge: true },
    );
  } catch (error) {
    console.error(error);
  }
  return result;
};

export const handleGoogleLogout = async () => {
  try {
    await signOut(auth);
  } catch (erro) {
    console.log(erro);
  }
};
