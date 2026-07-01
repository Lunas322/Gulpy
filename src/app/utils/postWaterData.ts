import { db } from "../firebase/firestore";
import { doc, setDoc } from "firebase/firestore";

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
    if (target === 0 || !interval) return;

    await setDoc(doc(db, "users", uid), {
        target,
        interval,
        uid,
        onboarding: true,
        now: 0,
        count: 0,
        date: todayStr
    });
}