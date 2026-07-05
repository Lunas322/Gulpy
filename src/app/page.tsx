"use client"
import Header from "./components/Header";
import WaterDashBoardCard from "./components/WaterDashboardCard";
import useWaterData from "./hooks/useWaterData";
import { Water } from "./types/water";
import DrinkButtons from "./components/DrinkButtons";
import DailyWaterSummary from "./components/DailyWaterSummary";
import useDailyIntake from "./hooks/useDailyIntake";
import useRequestPermission from "./hooks/useRequestPermission";

export default function Home() {

  const { data, loading } = useWaterData()
  useDailyIntake({ data })
  useRequestPermission()
  return (
    <main className="min-h-screen bg-sky-50">
      <Header />
      <div className="mx-auto flex max-w-md flex-col px-6 py-8">
        <WaterDashBoardCard data={data as Water} loading={loading} />


        <section className="mt-8">
          <h3 className="mb-4 text-lg font-semibold text-slate-900"
          >
            빠르게 추가하기
          </h3>

          <DrinkButtons data={data as Water} loading={loading} />
        </section>

        <DailyWaterSummary data={data as Water} loading={loading} />
      </div>
    </main>
  );
}