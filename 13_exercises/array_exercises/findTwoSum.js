const numbers = [1, 3, 7, 9, 2];
const target = 11;

function bruteForceSolution(arr, target) {
  // TODO: input validation

  for (let i = 0; i < arr.length; i++) {
    const numberToFind = target - arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      if (numberToFind === arr[j]) return [i, j];
    }
  }
  return null;
}

console.log(bruteForceSolution(numbers, target));

function optimizedSolution(arr, target) {
  const numsMap = {};
  for (let i = 0; i < arr.length; i++) {
    const currentMapValue = numsMap[arr[i]];

    if (currentMapValue) {
      return [currentMapValue, i];
    } else {
      numsMap[target - arr[i]] = i;
    }
  }
  return null;
}

console.log(optimizedSolution(numbers, target));
