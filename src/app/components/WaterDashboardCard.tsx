import { Water } from "../types/water"
import { getWaterPercent } from "../utils/calculateWaterIntakeDetails"
import WaterDashBoardSkeleton from "./WaterDashBoardSkeleton"




type Props = {
    data:Water
    loading: boolean
}


export default function WaterDashBoardCard ({data,loading}:Props) {
    const percent = getWaterPercent(data)

    if(loading) return <WaterDashBoardSkeleton/>
    return (
            <section className="rounded-3xl bg-white p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">오늘 마신 물</p>

              <h2 className="mt-2 text-4xl font-bold text-sky-500">
                {data?.now}
                <span className="ml-1 text-xl text-slate-400">ml</span>
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                목표 {data?.target ?? '000'}ml
              </p>
            </div>

            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-sky-100">
              <span className="text-2xl font-bold text-sky-600">
                {percent}% 
              </span>
            </div>
          </div>

          <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-200">
            <div className="h-full w-3/5 rounded-full bg-sky-500" style={{ width: `${Math.min(percent, 100)}%` }}/>
            </div>
        </section>
    )
}