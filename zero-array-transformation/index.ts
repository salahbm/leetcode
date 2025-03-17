function minZeroArray(nums: number[], queries: number[][]): number {
  if (nums.reduce((sum, a) => sum + a, 0) === 0) return 0;
  //query index
  let k = 0;

  const D = new Array(nums.length + 1).fill(0);

  for (const query of queries) {
    let l = query[0],
      r = query[1],
      x = query[2];
    D[l] += x;
    D[r + 1] -= x;
  }

  for (let i = 1; i <= D.length - 1; i++) {
    D[i] += D[i - 1];
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = Math.max(0, nums[i] - D[i]);
  }

  console.log('k:', k);
  console.log('nums:', nums);
  console.log('D:', D);
  if (nums.reduce((sum, a) => sum + Math.max(0, a), 0) === 0) {
    return k;
  }

  return -1;
}

// console.log(
//   minZeroArray(
//     [0],
//     [
//       [0, 0, 2],
//       [0, 0, 4],
//       [0, 0, 4],
//       [0, 0, 3],
//       [0, 0, 5],
//     ]
//   )
// );

console.log(
  minZeroArray(
    [5],
    [
      [0, 0, 5],
      [0, 0, 1],
      [0, 0, 3],
      [0, 0, 2],
    ]
  )
);

console.log(
  minZeroArray(
    [2, 0, 2],
    [
      [0, 2, 1],
      [0, 2, 1],
      [1, 1, 3],
    ]
  )
);
