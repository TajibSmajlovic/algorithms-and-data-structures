function bubbleSort<T>(input: T[]) {
  if (!["string", "number"].includes(typeof input[0]))
    throw new Error("Function can't sort with those values");

  const length = input.length;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++)
      if (input[j] > input[j + 1]) {
        const temp = input[j];
        input[j] = input[j + 1];
        input[j + 1] = temp;
      }
  }

  return input;
}

console.log(
  bubbleSort<number>([3, 7, 5, 9, 2, 1, 4])
);
