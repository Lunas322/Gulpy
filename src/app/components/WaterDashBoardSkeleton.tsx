export default function WaterDashBoardSkeleton() {
  return (
    <section className="animate-pulse rounded-3xl bg-white p-6 shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <div className="h-4 w-20 rounded bg-slate-200"></div>

          <div className="mt-3 flex items-baseline gap-1">
            <div className="h-10 w-24 rounded-lg bg-slate-200"></div>
            <div className="h-5 w-6 rounded bg-slate-200"></div>
          </div>
          <div className="mt-2 h-4 w-28 rounded bg-slate-200"></div>
        </div>

        <div className="h-24 w-24 rounded-full bg-slate-200"></div>
      </div>

      <div className="mt-6 h-3 w-full rounded-full bg-slate-200"></div>
    </section>
  );
}