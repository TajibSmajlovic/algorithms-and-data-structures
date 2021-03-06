function insertionSort<T>(input: T[]) {
  if (!["string", "number"].includes(typeof input[0]))
    throw new Error("Function can't sort with those values");

  const length = input.length;

  for (let i = 0; i < length; i++) {
    if (input[i] < input[0]) {
      input.unshift(input.splice(i, 1)[0]);
    } else {
      if (input[i] < input[i - 1])
        for (let j = 1; j < i; j++)
          if (input[i] >= input[j - 1] && input[i] < input[j])
            input.splice(j, 0, input.splice(i, 1)[0]);
    }
  }

  return input;
}

console.log(
  insertionSort<number>([6, 5, 3, 1, 8, 7, 2, 4])
);
