"use client";

import { useEffect, useRef } from "react";
import OneSignal from "react-onesignal";
import { useAuthStore } from "../store/authStore";

const ONESIGNAL_APP_ID = "16a9ee10-2ede-4d21-98fc-72addaf51408";

export default function OneSignalProvider() {
  const user = useAuthStore((state) => state.user);

  const hasInit = useRef(false);
  const hasLoggedIn = useRef(false);

  // -----------------------------
  // 1. INIT (딱 1번만)
  // -----------------------------
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

  // -----------------------------
  // 2. LOGIN + SUBSCRIPTION
  // -----------------------------
  useEffect(() => {
    const login = async () => {
      if (!user?.uid) return;
      if (!hasInit.current) return;
      if (hasLoggedIn.current) return;

      try {
        // 1) 현재 externalId 확인
        const externalId = OneSignal.User.externalId;

        // 2) 이미 같은 유저면 스킵
        if (externalId === user.uid) {
          hasLoggedIn.current = true;
          console.log("Already logged in:", externalId);
          return;
        }

        // 3) 로그인
        await OneSignal.login(user.uid);

        hasLoggedIn.current = true;

        console.log("OneSignal login success:", user.uid);

        // 4) subscription 생성 시간 확보 (중요)
        await new Promise((r) => setTimeout(r, 1000));

        // 5) 상태 체크 (디버깅용)
        const permission = Notification.permission;
        console.log("Notification permission:", permission);

        console.log(
          "externalId:",
          OneSignal.User.externalId
        );

        console.log(
          "push supported:",
          OneSignal.Notifications.isPushSupported?.()
        );
      } catch (err) {
        console.error("OneSignal login error:", err);
      }
    };

    login();
  }, [user?.uid]);

  return null;
}