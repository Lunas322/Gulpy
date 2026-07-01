import { useEffect, useState } from "react";
import { useAuthStore } from "../store/authStore";
import { Water } from "../types/water";
import { doc, onSnapshot,} from "firebase/firestore";
import { db } from "../firebase/firestore";


export default function useWaterData() {
    const user = useAuthStore((state) => state.user)
    const [data, setData] = useState<Water | null>(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!user) {
            setLoading(false)
            return
        }
        setLoading(true)
        const ref = doc(db,"users" ,user.uid)
        const unsubscribe = onSnapshot(ref,(snapshot)=>{
            if(snapshot.exists()){
                setData(snapshot.data() as Water)
            } else {
                setData(null)
            }setLoading(false)
            
        },(error)=>
        {
            console.error(error)
            setLoading(false)
        })
        return ()=> unsubscribe()
        },[user])
 return{data,loading}
}