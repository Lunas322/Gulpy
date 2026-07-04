"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "../store/authStore";
import { handleLogin } from "../firebase/auth";

export default function LoginButton() {
  const router = useRouter();
  const setUser = useAuthStore((state) => state.setUser);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const onLogin = async () => {
    setError("");

    if (!email || !password) {
      setError("이메일과 비밀번호를 입력해주세요.");
      return;
    }

    try {
      const userData = await handleLogin(email, password);
      setUser(userData.user);
    } catch (error: any) {
      console.log(error);

      switch (error.code) {
        case "auth/invalid-credential":
          setError("이메일 또는 비밀번호가 올바르지 않습니다.");
          break;

        case "auth/user-not-found":
          setError("존재하지 않는 계정입니다.");
          break;

        case "auth/wrong-password":
          setError("비밀번호가 올바르지 않습니다.");
          break;

        case "auth/too-many-requests":
          setError("로그인을 너무 많이 시도했습니다. 잠시 후 다시 시도해주세요.");
          break;

        default:
          setError("로그인 중 오류가 발생했습니다.");
      }
    }
  };

  return (
    <div className="flex w-full flex-col gap-4">
      <input
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="h-12 rounded-xl border border-gray-300 px-4 outline-none focus:border-sky-500"
      />

      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="h-12 rounded-xl border border-gray-300 px-4 outline-none focus:border-sky-500"
      />

      {error && (
        <p className="rounded-lg bg-red-100 px-4 py-3 text-sm text-red-600">
          {error}
        </p>
      )}

      <button
        onClick={onLogin}
        className="flex h-14 w-full items-center justify-center rounded-2xl bg-sky-500 font-semibold text-white transition-all hover:bg-sky-600"
      >
        로그인
      </button>

      <button
        type="button"
        onClick={() => router.push("/signup")}
        className="text-sm font-medium text-sky-500 transition hover:text-sky-700"
      >
        회원가입
      </button>
    </div>
  );
}