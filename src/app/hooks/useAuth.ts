
import React, { SetStateAction, useState } from "react";
import { handleLogin, handleSignUp } from "../firebase/auth";
import { useAuthStore } from "../store/authStore";
import { useRouter } from "next/navigation";

type Params = {
    setError: React.Dispatch<SetStateAction<string>>
    email: string
    password: string
    name?: string
}


export default function useAuth() {
    const setUser = useAuthStore((state) => state.setUser)
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const onLogin = async ({ setError, email, password, }: Params) => {
        setLoading(true)
        setError("");

        if (!email || !password) {
            setError("이메일과 비밀번호를 입력해주세요.");
            setLoading(false)
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
        } finally {
            setLoading(false)
        }
    }



    const onSignup = async ({ setError, email, password, name }: Params) => {
        setError("");
        setLoading(true)
        if (!name || !email || !password) {
            setError("모든 항목을 입력해주세요.");
            setLoading(false)
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            setError("올바른 이메일 형식이 아닙니다.");
            setLoading(false)
            return;
        }

        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

        if (!passwordRegex.test(password)) {
            setError("비밀번호는 8자 이상이며 영문과 숫자를 포함해야 합니다.");
            setLoading(false)
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
        } finally {
            setLoading(false)
        }
    };



    return {
        onLogin, loading, onSignup
    }
}


