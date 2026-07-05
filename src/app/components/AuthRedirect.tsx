"use client";

import React, { useEffect } from "react";
import { useAuthStore } from "../store/authStore";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firestore";
import { usePathname, useRouter } from "next/navigation";

export default function AuthRedirect({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = useAuthStore((state) => state.user);
  const loading = useAuthStore((state) => state.loading);

  const router = useRouter();
  const pathname = usePathname();

  const isLoginPage = pathname.startsWith("/login");
  const isSignupPage = pathname.startsWith("/signup");
  const isOnboardingPage = pathname.startsWith("/onboarding");

  const isAuthPage = isLoginPage || isSignupPage;

  useEffect(() => {
    if (loading) return;

    const checkAuth = async () => {
      if (!user) {
        if (!isAuthPage) {
          router.replace("/login");
        }
        return;
      }

      try {
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);

        if (!userSnap.exists()) {
          router.replace("/login");
          return;
        }

        const data = userSnap.data();

        const onboarding = data.onboarding ?? false;


        if (!onboarding) {
          if (!isOnboardingPage) {
            router.replace("/onboarding");
          }
          return;
        }

        if (isAuthPage) {
          router.replace("/");
        }
      } catch (error) {
        console.error(error);
      }
    };

    checkAuth();
  }, [
    user,
    loading,
    pathname,
    router,
    isAuthPage,
    isOnboardingPage,
  ]);

  return <>{children}</>;
}