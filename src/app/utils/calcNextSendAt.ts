export function calcNextSendAt(intervalMin: number) {
  const next = new Date();
  next.setMinutes(next.getMinutes() + intervalMin);
  return next.toISOString();
}