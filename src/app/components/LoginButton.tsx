"use client";

import { useAuthStore } from "../store/authStore";
import { handleGoogleLogin } from "../firebase/auth";

export default function LoginButton() {
  const setUser = useAuthStore((state) => state.setUser);

  const onLogin = async () => {
    try {
      const userData = await handleGoogleLogin();
      setUser(userData.user);
    } catch (error) {
      console.log(error);
      alert(`로그인 실패 : ${error}`)
    }
  };

  return (
    <button
      className="flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-sky-500 font-semibold text-white transition-all hover:bg-sky-600 hover:shadow-md active:scale-[0.98]"
      onClick={() => onLogin()}
    >
      Google로 시작하기
    </button>
  );
}
