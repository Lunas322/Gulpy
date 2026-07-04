"use client";


import { useEffect } from "react";
import OneSignal from "react-onesignal";
import { useAuthStore } from "../store/authStore";

export default function OneSignalProvider() {
  const user = useAuthStore((state)=>state.user)
  useEffect(() => {
    async function init() {  
   await OneSignal.init({
  appId: "16a9ee10-2ede-4d21-98fc-72addaf51408",
});
    if (!user?.uid) return
await OneSignal.login(user.uid);
    }
    init()
  }, []);

  return null;
}