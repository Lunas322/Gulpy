"use client";

import { useEffect, useRef } from "react";
import OneSignal from "react-onesignal";
import { useAuthStore } from "../store/authStore";

const ONESIGNAL_APP_ID = "16a9ee10-2ede-4d21-98fc-72addaf51408";

export default function OneSignalProvider() {
  const user = useAuthStore((state) => state.user);

  const hasInit = useRef(false);
  const hasLoggedIn = useRef(false);

  useEffect(() => {
    const init = async () => {
      if (hasInit.current) return;

      try {
        await OneSignal.init({
          appId: ONESIGNAL_APP_ID,
        });

        hasInit.current = true;
        console.log("OneSignal init done");
      } catch (err) {
        console.error("OneSignal init error:", err);
      }
    };

    init();
  }, []);

  useEffect(() => {
    const login = async () => {
      if (!user?.uid) return;
      if (!hasInit.current) return;
      if (hasLoggedIn.current) return;

      try {
        const externalId = OneSignal.User.externalId;

        if (externalId === user.uid) {
          hasLoggedIn.current = true;
          console.log("Already logged in:", externalId);
          return;
        }
        await OneSignal.login(user.uid);
        hasLoggedIn.current = true;
        await new Promise((r) => setTimeout(r, 1000));
      } catch (err) {
        console.error("OneSignal login error:", err);
      }
    };

    login();
  }, [user?.uid]);

  return null;
}