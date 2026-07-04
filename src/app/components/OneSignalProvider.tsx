"use client";

import { useEffect } from "react";
import OneSignal from "react-onesignal";

export default function OneSignalProvider() {
  useEffect(() => {
    async function init() {
  
    await OneSignal.init({
        appId: "16a9ee10-2ede-4d21-98fc-72addaf51408",
      });
    }
    init()
  }, []);

  return null;
}