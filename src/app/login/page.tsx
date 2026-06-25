import LoginButton from "../components/LoginButton";

export default function LoginPage() {
    
  return (
    <main className="flex min-h-screen items-center justify-center bg-sky-50 px-6">
      <div className="w-full max-w-md rounded-[32px] border border-sky-100 bg-white p-10 shadow-lg shadow-sky-100/50">
        <div className="mb-10 text-center">
          <div className="mb-5 text-7xl">💧</div>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900">
            Gulpy
          </h1>

          <p className="mt-3 leading-relaxed text-slate-500">
            물을 마시는 습관을
            <br />
            쉽고 꾸준하게 만들어보세요
          </p>
        </div>

        <LoginButton/>

        <p className="mt-6 text-center text-sm text-slate-400">
          로그인 후 바로 물 섭취를 기록할 수 있어요
        </p>
      </div>
    </main>
  );
}