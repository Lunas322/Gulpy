"use client";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useAuthStore } from "../store/authStore";
import { auth } from "../firebase/auth";

export function useAuthListener() {
  const setUser = useAuthStore((state) => state.setUser);
  const setLoading = useAuthStore((state) => state.setLoading);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);
}
