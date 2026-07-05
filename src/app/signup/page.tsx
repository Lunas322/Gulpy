import SignupForm from "../components/ SignupForm";






export default function SignupPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-sky-50 px-6">
      <div className="w-full max-w-md rounded-4xl border border-sky-100 bg-white p-10 shadow-lg shadow-sky-100/50">
        <div className="mb-10 text-center">
          <div className="mb-5 text-7xl">💧</div>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900">
            회원가입
          </h1>

          <p className="mt-3 leading-relaxed text-slate-500">
            Gulpy와 함께
            <br />
            건강한 물 마시는 습관을 시작해보세요
          </p>
        </div>

        <SignupForm />

        <p className="mt-6 text-center text-sm text-slate-400">
          이미 계정이 있으신가요?
          <a
            href="/login"
            className="ml-1 font-medium text-sky-500 hover:text-sky-600"
          >
            로그인
          </a>
        </p>
      </div>
    </main>
  );
}