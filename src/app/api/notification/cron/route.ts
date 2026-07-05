import { NextResponse } from "next/server";
import { sendPush } from "@/app/lib/onesignal";
import { adminDb } from "@/app/lib/firebaseAdmin";

export async function GET(req: Request) {
  const authHeader = req.headers.get("authorization");

  if (
    !process.env.CRON_SECRET ||
    authHeader !== `Bearer ${process.env.CRON_SECRET}`
  ) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const now = new Date();

  const snapshot = await adminDb
    .collection("users")
    .where("onboarding", "==", true)
    .get();

  let sentCount = 0;

  for (const doc of snapshot.docs) {
    try {
      const user = doc.data();
      if (!user.nextSendAt) continue;

      const nextSend = new Date(user.nextSendAt);
      if (now < nextSend) continue;

      await sendPush(doc.id, Math.max(user.target - user.now, 0));

      const newNext = new Date(nextSend);
      newNext.setMinutes(newNext.getMinutes() + (user.interval ?? 60));

      await doc.ref.update({
        nextSendAt: newNext.toISOString(),
      });

      sentCount++;
    } catch (error) {
      console.error(`[cron] ${doc.id} 알림 처리 실패`, error);
    }
  }

  return NextResponse.json({
    ok: true,
    checked: snapshot.size,
    sent: sentCount,
  });
}