
import OneSignal from "react-onesignal";

export default async function requestPermission() {

    const isPermission = await OneSignal.Notifications.permission
    if (isPermission === true) return
    try {
        await OneSignal.Notifications.requestPermission()

    } catch (error) {
        console.log(error)
    }

}