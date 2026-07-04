import { db } from "../firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { calcNextSendAt } from "./calcNextSendAt";

type Params = {
    target: number;
    interval: number;
    uid: string;
};

export default async function postWaterData({
    target,
    interval,
    uid,
}: Params) {
    const todayStr = new Date().toISOString().slice(0, 10);
    if (!target || target <= 0 || !interval) {
    throw new Error("target / interval 값이 올바르지 않습니다");
    }
    await setDoc(doc(db, "users", uid), {
        target,
        interval,
        uid,
        onboarding: true,
        now: 0,
        count: 0,
        date: todayStr,
        nextSendAt: calcNextSendAt(interval ?? 60)
    });
}