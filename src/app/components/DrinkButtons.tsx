import useDrinkWater from "../hooks/useDrinkWater"


export default function DrinkButtons() {
    const waters = [{ water: 100, imoji: '🥛' }, { water: 200, imoji: '🥤' }, { water: 300, imoji: '💧' }, { water: 500, imoji: '🧴' }]
    const { handleDrink } = useDrinkWater()
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