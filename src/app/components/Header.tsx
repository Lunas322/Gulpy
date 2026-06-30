import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-md items-center justify-between px-6">

        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">💧</span>
          <span className="text-xl font-bold text-sky-500">
            Gulpy
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-slate-100">
            🔔
          </button>

          <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-slate-100">
            ⚙️
          </button>
        </div>
      </div>
    </header>
  );
}