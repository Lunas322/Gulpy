import { useEffect } from "react";
import OneSignal from "react-onesignal";

export default function useRequestPermission () {

    useEffect(()=>{
        const requestPermission = async ()=>{
            const  isPermission = await OneSignal.Notifications.permission
            if (isPermission === true) return
            try{
                await OneSignal.Notifications.requestPermission()

            } catch (error) {
                console.log(error)
            }
        }
        requestPermission()
  
    },[])
}