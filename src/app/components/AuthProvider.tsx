"use client"
import { useAuthListener } from "../hooks/useAuthListener"

export default function AuthProvider ({children}:{children:React.ReactNode}) {
    useAuthListener()
return(
    <>
    {children}
    </>

)
}