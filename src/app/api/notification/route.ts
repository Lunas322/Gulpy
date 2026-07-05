import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { uid } = await req.json();

    const response = await fetch("https://api.onesignal.com/notifications", {
        method: "POST",
        headers: {
            Authorization: `Key ${process.env.ONESIGNAL_API_KEY}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            app_id: "16a9ee10-2ede-4d21-98fc-72addaf51408",
            target_channel: "push",
            include_aliases: {
                external_id: [uid],
            },
            contents: { en: "물 마실 시간입니다!" },
        }),
    });

    const data = await response.json();
    return NextResponse.json(data);
}