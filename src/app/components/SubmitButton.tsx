import { useRouter } from "next/navigation"
import { useAuthStore } from "../store/authStore"
import postWaterData from "../utils/postWaterData"

type Props = {
    target: number
    interval: number
}

export default function SubmitButton({ interval, target }: Props) {
    const router = useRouter()
    const user = useAuthStore((state) => state.user)
    const handleSubmit = async () => {
        if (!user) return
        await postWaterData({ uid: user?.uid, target, interval })
        router.replace('/')
    }
    return (
        <button className="mt-10 w-full rounded-xl bg-sky-500 py-4 text-lg font-bold text-white transition hover:bg-sky-600"
            onClick={() => handleSubmit()}
        >
            시작하기
        </button>
    )
}