'use client'
import { useState } from "react"
import DailyTargetInput from "./DailyTargetInput";
import ReminderIntervalSelector from "./ReminderIntervalSelector";
import SubmitButton from "./SubmitButton";



export default function OnboardingForm() {
    const [target, setTarget] = useState(2000);
    const [interval, setInterval] = useState(30);


    return (
        <>
            <div className="space-y-6">
                <DailyTargetInput value={target} onChange={setTarget} />
                <ReminderIntervalSelector value={interval} onChange={setInterval} />
            </div>
            <SubmitButton target={target} interval={interval} />
        </>
    )
}