"use client";

import React, { useEffect } from "react";
import { useAuthStore } from "../store/authStore";
import { usePathname, useRouter } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firestore";

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
      // 로그인 안 된 경우
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

        // Firestore에 저장된 onboarding(boolean) 사용
        const onboarding = data.onboarding ?? false;

        // 온보딩을 안 했으면
        if (!onboarding) {
          if (!isOnboardingPage) {
            router.replace("/onboarding");
          }
          return;
        }

        // 온보딩을 했으면 로그인/회원가입/온보딩 페이지 접근 불가
        if (isAuthPage || isOnboardingPage) {
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