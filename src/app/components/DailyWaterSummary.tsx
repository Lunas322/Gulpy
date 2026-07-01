import { Water } from "../types/water";
import { getRemainingWater, getWaterPercent } from "../utils/calculateWaterIntakeDetails";
import DailyWaterSummarySkeleton from "./skeletons/DailyWaterSummarySkeleton";


type Props = {
  data: Water
  loading: boolean
}
export default function DailyWaterSummary({ data, loading }: Props) {

  if (loading || !data) return <DailyWaterSummarySkeleton />

  return (
    <section className="mt-8 rounded-3xl bg-white p-6 shadow  text-slate-500">
      <h3 className="mb-4 text-lg font-semibold">
        오늘 기록
      </h3>

      <div className="space-y-3">
        <div className="flex justify-between">
          <span>목표 달성률</span>
          <span className="font-semibold">{getWaterPercent(data)} %</span>
        </div>

        <div className="flex justify-between">
          <span>남은 양</span>
          <span className="font-semibold">{getRemainingWater(data)}</span>
        </div>

        <div className="flex justify-between">
          <span>마신 횟수</span>
          <span className="font-semibold">{data?.count}회</span>
        </div>
      </div>
    </section>
  )
}