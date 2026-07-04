"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { handleSignUp } from "../firebase/auth";

export default function SignupButton() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const onSignup = async () => {
    setError("");

    if (!name || !email || !password) {
      setError("모든 항목을 입력해주세요.");
      return;
    }

    // 이메일 정규식
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("올바른 이메일 형식이 아닙니다.");
      return;
    }

    // 비밀번호 정규식
    // 최소 8자, 영문 + 숫자 포함
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

    if (!passwordRegex.test(password)) {
      setError("비밀번호는 8자 이상이며 영문과 숫자를 포함해야 합니다.");
      return;
    }

    try {
      await handleSignUp(name, email, password);

      router.replace("/");
    } catch (error: any) {
      console.error(error);

      switch (error.code) {
        case "auth/email-already-in-use":
          setError("이미 가입된 이메일입니다.");
          break;

        case "auth/weak-password":
          setError("비밀번호가 너무 약합니다.");
          break;

        case "auth/invalid-email":
          setError("이메일 형식이 올바르지 않습니다.");
          break;

        default:
          setError("회원가입 중 오류가 발생했습니다.");
      }
    }
  };

  return (
    <div className="flex w-full flex-col gap-4">
      <input
        type="text"
        placeholder="이름"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="h-12 rounded-xl border border-gray-300 px-4 outline-none focus:border-sky-500"
      />

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
        <div className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </div>
      )}

      <button
        onClick={onSignup}
        className="flex h-14 w-full items-center justify-center rounded-2xl bg-sky-500 font-semibold text-white transition-all hover:bg-sky-600 hover:shadow-md active:scale-[0.98]"
      >
        회원가입
      </button>
    </div>
  );
}