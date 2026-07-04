import { NextResponse } from "next/server";

export async function POST() {
  try {
    const response = await fetch("https://api.onesignal.com/notifications", {
      method: "POST",
      headers: {
        Authorization: `Key ${process.env.ONESIGNAL_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        app_id: process.env.NEXT_PUBLIC_ONESIGNAL_APP_ID,
        included_segments: ["Subscribed Users"],
        headings: {
          en: "💧 Gulpy",
        },
        contents: {
          en: "물 마실 시간입니다!",
        },
      }),
    });

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      {
        error: "알림 전송 실패",
        detail: error,
      },
      {
        status: 500,
      }
    );
  }
}