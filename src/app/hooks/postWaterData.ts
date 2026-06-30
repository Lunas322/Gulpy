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
    if (target === 0 || !interval) return;

    await setDoc(doc(db, "users", uid), {
        target,
        interval,
        uid,
        onboarding: true,
    });
}