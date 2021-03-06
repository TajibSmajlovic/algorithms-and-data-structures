function normalRecursionSolution(num: number = 4) {
  if (num <= 1) return 1;

  return num * normalRecursionSolution(num - 1);
}

// only works if engine supports Tail Call Optimization (TCO) - Safari supports it
function tailRecursionSolution(num: number = 4, totalSoFar = 1) {
  if (num === 0) return totalSoFar;

  return tailRecursionSolution(num - 1, totalSoFar * num);
}

console.log(normalRecursionSolution());
console.log(tailRecursionSolution());
