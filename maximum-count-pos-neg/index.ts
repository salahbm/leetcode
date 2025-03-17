function maximumCount(nums: number[]): number {
  // start time log
  console.time('maximumCount');
  let positive = 0;
  let negative = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      positive++;
    } else {
      negative++;
    }
  }
  // end time log
  console.timeEnd('maximumCount');
  return Math.max(positive, negative);
}

console.log(maximumCount([-2, -1, -1, 1, 2, 3]));
console.log(maximumCount([-3, -2, -1, 0, 0, 1, 2]));
console.log(maximumCount([1, 2, 3, -5]));
