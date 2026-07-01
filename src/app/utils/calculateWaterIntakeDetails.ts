import { Water } from "../types/water"


export function getWaterPercent(data?: Water) {
  if (!data?.target) return 0;
  return  data?.target
  ? Number(((data.now / data.target) * 100).toFixed(2))
  : 0;;
}

export function getRemainingWater(data?: Water) {
  if (!data) return 0;
  return Math.max(data.target - data.now, 0);
}