import { Water } from "../types/water"


export function getWaterPercent(data?: Water) {
  if (!data?.target) return 0;
  return Math.min((data.now / data.target) * 100, 100);
}

export function getRemainingWater(data?: Water) {
  if (!data) return 0;
  return Math.max(data.target - data.now, 0);
}