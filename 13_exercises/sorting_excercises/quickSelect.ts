function swap<T>(input: T[], i: number, j: number) {
  const temp = input[i];
  input[i] = input[j];
  input[j] = temp;
}

function getPartition<T>(input: T[], left: number, right: number) {
  let i = left;

  for (let j = left; j <= right; j++) {
    if (input[j] <= input[right]) {
      swap(input, i, j);
      i++;
    }
  }
  return i - 1;
}

export function quickSelect<T>(
  input: T[],
  left: number,
  right: number,
  indexToFind: number
) {
  if (!["string", "number"].includes(typeof input[0]))
    throw new Error("Function can't sort with those values");

  if (left < right) {
    const partitionIndex = getPartition(input, left, right);

    if (partitionIndex === indexToFind) {
      return input[partitionIndex];
    } else if (partitionIndex < indexToFind) {
      return quickSelect(input, left, partitionIndex - 1, indexToFind);
    } else {
      return quickSelect(input, partitionIndex + 1, right, indexToFind);
    }
  }
}
