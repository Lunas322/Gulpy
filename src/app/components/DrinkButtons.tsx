import useDrinkWater from "../hooks/useDrinkWater"
import { Water } from "../types/water"
import DrinkButtonsSkeleton from "./skeletons/DrinkButtonsSkeleton"

type Props = {
    loading: boolean
    data: Water
}
export default function DrinkButtons({ loading, data }: Props) {
    const waters = [{ water: 100, imoji: '🥛' }, { water: 200, imoji: '🥤' }, { water: 300, imoji: '💧' }, { water: 500, imoji: '🧴' }]
    const { handleDrink } = useDrinkWater()
    if (loading || !data) return <DrinkButtonsSkeleton />
    return (
        <div className="grid grid-cols-2 gap-4">
            {waters.map((data) => {
                return (
                    <button className="rounded-2xl bg-white  text-slate-500 py-5 shadow transition active:scale-95 active:bg-sky-100 active:shadow-inner"
                        onClick={() => handleDrink(data.water)}
                        key={data.water}
                    >
                        <p className="text-3xl">{data.imoji}</p>
                        <p className="mt-2 font-semibold">{data.water}ml</p>
                    </button>
                )
            })}
        </div>
    )
}