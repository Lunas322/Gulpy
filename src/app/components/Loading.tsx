export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-sky-50">
      <div className="flex flex-col items-center gap-6">

        <div className="text-6xl animate-bounce">💧</div>

        <p className="text-slate-600 font-medium">
          물을 준비 중이에요...
        </p>

        <div className="h-2 w-48 overflow-hidden rounded-full bg-sky-100">
          <div className="h-full w-1/2 animate-pulse bg-sky-500" />
        </div>
      </div>
    </main>
  );
}