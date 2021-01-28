const input = [6, 9, 3, 4, 5, 8];

function bruteForceSolution(arr = input) {
  let area = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const currentArea = Math.min(arr[i], arr[j]) * (j - i);

      if (area < currentArea) area = currentArea;
    }
  }

  return area;
}

console.log(bruteForceSolution());

function optimizedSolution(arr = input) {
  let maxArea = 0;
  let p1 = 0;
  let p2 = arr.length - 1;

  while (p1 < p2) {
    const currentArea = Math.min(arr[p1], arr[p2]) * (p2 - p1);

    if (currentArea > maxArea) maxArea = currentArea;

    if (arr[p1] > arr[p2]) {
      p2--;
    } else {
      p1++;
    }
  }

  return maxArea;
}

console.log(optimizedSolution());
