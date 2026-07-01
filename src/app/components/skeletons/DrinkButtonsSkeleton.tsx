export default function DrinkButtonsSkeleton() {
    const skeletons = [1, 2, 3, 4]

    return (
        <div className="grid grid-cols-2 gap-4 animate-pulse">
            {skeletons.map((item) => {
                return (
                    <div
                        key={item}
                        className="rounded-2xl bg-white py-5 shadow"
                    >
                        <div className="mx-auto h-10 w-10 rounded bg-slate-200" />

                        <div className="mx-auto mt-4 h-4 w-16 rounded bg-slate-200" />
                    </div>
                )
            })}
        </div>
    )
}