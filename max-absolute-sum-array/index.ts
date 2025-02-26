function maxAbsoluteSum(nums: number[]): number {
  let sum = 0;
  let min = 0;
  let max = 0;
  for (const num of nums) {
    max = Math.max(max, 0) + num;
    min = Math.min(min, 0) + num;
    sum = Math.max(sum, Math.max(max, Math.abs(min)));
  }
  return sum;
}

console.log(maxAbsoluteSum([1, -3, 2, 3, -4]));
