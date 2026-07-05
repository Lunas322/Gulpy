"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ErrrorBox from "./ErrorBox";
import LoadingButton from "./LoadingButton";
import useAuth from "../hooks/useAuth";

export default function LoginForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter()
  const [error, setError] = useState("");
  const {loading,onLogin} = useAuth()


  return (
    <div className="flex w-full flex-col gap-4 text-slate-500">
      <input
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="h-12 rounded-xl border border-gray-300 px-4 outline-none  focus:border-sky-500 "
      />

      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="h-12 rounded-xl border border-gray-300 px-4 outline-none focus:border-sky-500"
      />

      <ErrrorBox error={error} />

    <LoadingButton onClick={()=>onLogin({email,password,setError})} text="로그인 진행중..." buttonTitle="로그인" loading={loading}/>
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