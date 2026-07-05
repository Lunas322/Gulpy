import { sendPush } from "@/app/lib/onesignal";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { uid } = await req.json();

    const data = await sendPush(uid,0)
    return NextResponse.json(data)
}