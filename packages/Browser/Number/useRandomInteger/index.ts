/**
 * 生成随机整数 [min, max]
 * @param min
 * @param max
 * @returns
 */
export default function useRandomInteger(min: number, max: number) {
  if (min > max) {
		min = min ^ max
		max = min ^ max
		min = min ^ max
  }
  return Math.floor(Math.random() * (max - min + 1)) + min
}
