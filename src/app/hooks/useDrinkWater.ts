import { doc, increment, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firestore";
import { useAuthStore } from "../store/authStore";

export default function useDrinkWater() {
    const user = useAuthStore((state) => state.user)

    const handleDrink = async (drinkSize:number) => {
        if (!user) return
        const Ref = doc(db, "users", user.uid);
        await updateDoc(Ref, {

            now: increment( drinkSize)
            ,count: increment(1)
        });
    }
    return {handleDrink}
}