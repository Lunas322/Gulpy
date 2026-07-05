"use client";

import { useState } from "react";
import ErrrorBox from "./ErrorBox";
import useAuth from "../hooks/useAuth";
import LoadingButton from "./LoadingButton";

export default function SignupForm() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const { onSignup, loading } = useAuth()

  return (
    <div className="flex w-full flex-col gap-4 text-slate-500">
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

      <ErrrorBox error={error} />

      <LoadingButton onClick={() => onSignup({ email, name, password, setError })} loading={loading} text="회원가입 진행중...." buttonTitle="회원가입" />
    </div>
  );
}