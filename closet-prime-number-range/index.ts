function closestPrimes(left: number, right: number): number[] {
  // Create an array of booleans to mark prime numbers
  const prime = Array.from({ length: right + 1 }, (_, i) => true);
  const n = Math.ceil(Math.sqrt(right)) + 1;

  for (let p = 2; p <= n; p++) {
    if (prime[p]) {
      for (let i = Math.pow(p, 2); i <= right; i += p) {
        prime[i] = false;
      }
    }
  }

  let arr = new Array();

  for (let z = 2; z <= right + 1; z++) {
    if (prime[z] && z >= left) {
      arr.push(z);
    }
  }

  if (arr.length < 2) return [-1, -1];

  // Initialize variables to track the closest pair and minimum difference
  let closestPair = [arr[0], arr[1]];
  let minDifference = arr[1] - arr[0];

  // Iterate through the array to find the closest pair
  for (let i = 1; i < arr.length; i++) {
    const difference = arr[i] - arr[i - 1];
    if (difference < minDifference) {
      minDifference = difference;
      closestPair = [arr[i - 1], arr[i]];
    }
  }

  return closestPair;
}

console.log(closestPrimes(1, 1000000));
