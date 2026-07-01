import { doc, updateDoc } from "firebase/firestore";
import { Water } from "../types/water";
import { useAuthStore } from "../store/authStore";
import { db } from "../firebase/firestore";
import { useEffect } from "react";

type Params = {
    data?: Water |null |undefined;
};

export default function useDailyIntake({ data }: Params) {
    const user = useAuthStore((state) => state.user);

    const todayStr = new Date().toISOString().slice(0, 10);

    useEffect(() => {
        if (!user) return;
        if (!data) return;

        const checkAndReset = async () => {
            if (data.date === todayStr) return;

            const ref = doc(db, "users", user.uid);

            await updateDoc(ref, {
                date: todayStr,
                now: 0,
                count: 0,
            });
        };

        checkAndReset();
    }, [user, data, todayStr]);
}