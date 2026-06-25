"use client";

import React, { useEffect } from "react";
import { useAuthStore } from "../store/authStore";
import { usePathname, useRouter } from "next/navigation";
import Loading from "./Loading";

export default function AuthRedirect({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = useAuthStore((state) => state.user);
  const loading = useAuthStore((state)=>state.loading)
  const router = useRouter();
  const pathname = usePathname();
  const isLoginPage = pathname.startsWith("/login");

  useEffect(() => {
    if (loading) return
    if (user && isLoginPage) {
      router.replace("/");
    }
    if (!user && !isLoginPage) {
      router.replace("/login");
    }

  }, [user, pathname, loading]);


  return <>{children}</>;
}
