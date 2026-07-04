"use client"
import Header from "./components/Header";
import WaterDashBoardCard from "./components/WaterDashboardCard";
import useWaterData from "./hooks/useWaterData";
import { Water } from "./types/water";
import DrinkButtons from "./components/DrinkButtons";
import DailyWaterSummary from "./components/DailyWaterSummary";
import useDailyIntake from "./hooks/useDailyIntake";
import OneSignal from "react-onesignal";
import { useAuthStore } from "./store/authStore";

export default function Home() {
  const user = useAuthStore((state)=>state.user)


  const { data, loading } = useWaterData()
  useDailyIntake({ data })

  const handleClick = async () => {
    console.log('요청됨')
    await OneSignal.Notifications.requestPermission()
    console.log('요청 성공', Notification.permission)
  }

async function sendNotification() {
    const res = await fetch("/api/notification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uid: user?.uid }),
    });
    const data = await res.json();
    console.log(data);
}


  return (
    <main className="min-h-screen bg-sky-50">
      <Header />
      <div className="mx-auto flex max-w-md flex-col px-6 py-8">
        <WaterDashBoardCard data={data as Water} loading={loading} />


        <section className="mt-8">
          <h3 className="mb-4 text-lg font-semibold text-slate-900"
            onClick={handleClick}
          >
            빠르게 추가하기
          </h3>
          <button
            onClick={handleClick}
            className="bg-blue-500 text-white p-2"
          >
            알림 요청
          </button>
                    <button
            onClick={sendNotification}
            className="bg-blue-500 text-white p-2"
          >
            테스트 알림
          </button>

          <DrinkButtons data={data as Water} loading={loading} />
        </section>

        <DailyWaterSummary data={data as Water} loading={loading} />
      </div>
    </main>
  );
}