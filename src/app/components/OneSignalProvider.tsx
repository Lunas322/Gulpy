"use client";

import { useEffect } from "react";
import OneSignal from "react-onesignal";
import { useAuthStore } from "../store/authStore";

let initialized = false;

export default function OneSignalProvider() {
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    async function initOneSignal() {
      if (!initialized) {
        await OneSignal.init({
          appId: "16a9ee10-2ede-4d21-98fc-72addaf51408",
        });
        initialized = true;
      }

      if (user?.uid) {
        await OneSignal.login(user.uid);
      }
    }

    initOneSignal();
  }, [user?.uid]);

  return null;
}