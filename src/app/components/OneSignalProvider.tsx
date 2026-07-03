"use client";

import { useEffect } from "react";
import OneSignal from "react-onesignal";

export default function OneSignalProvider() {
  useEffect(() => {
    OneSignal.init({
      appId: "285c2047-db30-4f21-a52f-2df8a34ba522",
    });
  }, []);

  return null;
}