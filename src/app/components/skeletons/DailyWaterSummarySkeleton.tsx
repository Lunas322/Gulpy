export default function DailyWaterSummarySkeleton() {
    return (
        <section className="mt-8 animate-pulse rounded-3xl bg-white p-6 shadow">

            <div className="mb-4 h-5 w-24 rounded bg-slate-200" />

            <div className="space-y-3 text-slate-500">

                <div className="flex justify-between">
                    <div className="h-4 w-24 rounded bg-slate-200" />
                    <div className="h-4 w-12 rounded bg-slate-200" />
                </div>


                <div className="flex justify-between">
                    <div className="h-4 w-16 rounded bg-slate-200" />
                    <div className="h-4 w-20 rounded bg-slate-200" />
                </div>


                <div className="flex justify-between">
                    <div className="h-4 w-20 rounded bg-slate-200" />
                    <div className="h-4 w-10 rounded bg-slate-200" />
                </div>
            </div>
        </section>
    )
}