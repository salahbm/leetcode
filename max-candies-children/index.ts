function maximumCandies(candies: number[], k: number): number {
  if (k > candies.reduce((total, a) => total + a, 0)) return 0;

  const arr = [candies[0]];

  let max = 0;
  for (let i = 1; i < candies.length; i++) {
    const sub = candies[i] - candies[0];
    if (sub > 0) {
      arr.splice(i + 1, 1, candies[0], sub);
    }
  }
  console.log(arr);

  return max;
}

console.log(maximumCandies([5, 8, 6], 3));
console.log(maximumCandies([4, 7, 5], 4));
console.log(maximumCandies([2, 5], 11));
