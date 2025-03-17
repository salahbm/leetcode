function divideArray(nums: number[]): boolean {
  const map = new Map();
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (const [key, value] of map) {
    if (value % 2 !== 0) return false;
  }
  return true;
}

console.log(divideArray([3, 2, 3, 2, 2, 2]));
console.log(divideArray([1, 2, 3, 4]));
console.log(divideArray([1, 2, 3, 4, 5, 6]));
