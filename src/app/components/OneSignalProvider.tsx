"use client";

import { useEffect } from "react";
import OneSignal from "react-onesignal";
import { useAuthStore } from "../store/authStore";

const ONESIGNAL_APP_ID = "16a9ee10-2ede-4d21-98fc-72addaf51408";

let initialized = false;

export default function OneSignalProvider() {
  const user = useAuthStore((state) => state.user);
  useEffect(() => {
    async function init() {
      if (initialized) return;

      try {
        await OneSignal.init({
          appId: ONESIGNAL_APP_ID,
        });

        initialized = true;
      } catch (err) {
        console.error("OneSignal init error:", err);
      }
    }

    init();
  }, []);
  useEffect(() => {
    async function login() {
      if (!user?.uid) return;

      try {

        if (!initialized) return;

        await OneSignal.login(user.uid);

        await new Promise((r) => setTimeout(r, 300));

        const externalId = OneSignal.User.externalId;
        console.log("OneSignal external_id:", externalId);
        console.log("OneSignal external_id:", externalId);
      } catch (err) {
        console.error("OneSignal login error:", err);
      }
    }

    login();
  }, [user?.uid]);

  return null;
}