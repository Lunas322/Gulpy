export async function sendPush(uid: string, remainingMl: number) {
  const content =
    remainingMl > 0
      ? `물 마실 시간입니다! 목표까지 ${remainingMl}ml 남았어요`
      : `오늘 목표는 달성했어요! 그래도 수분 보충 잊지 마세요 💧`;

  const response = await fetch("https://api.onesignal.com/notifications", {
    method: "POST",
    headers: {
      Authorization: `Key ${process.env.ONESIGNAL_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      app_id: process.env.ONESIGNAL_APP_ID,
      target_channel: "push",
      include_aliases: { external_id: [uid] },
      contents: { en: content },
    }),
  });

  const data = await response.json();
  if (data.errors) console.error(`[push 실패] uid=${uid}`, data.errors);
  return data;
}