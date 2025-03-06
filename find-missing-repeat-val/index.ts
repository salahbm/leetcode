function findMissingAndRepeatedValues(grid: number[][]): number[] {
  const arr = grid.length;
  const set = new Set<number>();
  let repeated = 0;
  let missing = 0;

  for (let i = 0; i < arr; i++) {
    for (let j = 0; j < arr; j++) {
      const val = grid[i][j];
      if (set.has(val)) {
        repeated = val;
      } else {
        set.add(val);
      }
    }
  }

  for (let z = 1; z <= arr ** 2; z++) {
    if (!set.has(z)) {
      missing = z;
      break;
    }
  }

  return [repeated, missing];
}

console.log(
  'find:',
  findMissingAndRepeatedValues([
    [9, 1, 7],
    [8, 9, 2],
    [3, 4, 6],
  ])
);
