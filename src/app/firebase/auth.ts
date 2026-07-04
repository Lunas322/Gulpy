import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "./firebase";
import { doc, setDoc } from "firebase/firestore";
import { db } from "./firestore";
export const auth = getAuth(app);
export const handleLogin = async (
  email: string,
  password: string
) => {
  return await signInWithEmailAndPassword(auth, email, password);
};
export const handleSignUp = async (
  name: string,
  email: string,
  password: string
) => {
  const result = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  await setDoc(
    doc(db, "users", result.user.uid),
    {
      uid: result.user.uid,
      name,
      email,
      createdAt: new Date().toISOString(),
    },
    { merge: true }
  );

  return result;
};