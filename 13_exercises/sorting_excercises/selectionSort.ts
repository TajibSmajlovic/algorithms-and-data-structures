function selectionSort<T>(input: T[]) {
  if (!["string", "number"].includes(typeof input[0]))
    throw new Error("Function can't sort with those values");

  const length = input.length;

  for (let i = 0; i < length; i++) {
    let temp = input[i],
      min = i;

    for (let j = i + 1; j < length; j++) {
      if (input[min] > input[j]) min = j;
    }

    input[i] = input[min];
    input[min] = temp;
  }

  return input;
}

console.log(
  selectionSort<number>([3, 7, 5, 9, 2, 1, 4])
);
