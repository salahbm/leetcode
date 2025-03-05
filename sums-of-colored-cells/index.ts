function coloredCells(n: number): number {
  let sums = new Array();
  for (let i = 1; i < n; i++) {
    sums.push(i);
  }
  return 1 + sums.reduce((a, b) => a + b, 0) * 4;
}

console.log(coloredCells(3));
