"use client";

import React, { useEffect } from "react";
import { useAuthStore } from "../store/authStore";
import { usePathname, useRouter } from "next/navigation";

export default function AuthRedirect({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = useAuthStore((state) => state.user);
  const router = useRouter();
  const pathname = usePathname();
  const isLoginPage = pathname.startsWith("/login");

  useEffect(() => {
    if (user && isLoginPage) {
      router.replace("/");
    }
    if (!user && !isLoginPage) {
      router.replace("/login");
    }
  }, [user, pathname]);

  return <>{children}</>;
}
