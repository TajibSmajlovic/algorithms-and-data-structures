function merge<T>(left: T[], right: T[]) {
  const sorted: T[] = [],
    length = left.length + right.length;
  let p1 = 0,
    p2 = 0;

  while (sorted.length !== length) {
    if (!right[p2] || left[p1] < right[p2]) {
      sorted.push(left[p1]);
      p1++;
    } else {
      sorted.push(right[p2]);
      p2++;
    }
  }

  return sorted;
}

function mergeSort<T>(input: T[]) {
  if (!["string", "number"].includes(typeof input[0]))
    throw new Error("Function can't sort with those values");

  if (input.length === 1) return input;

  const middle = Math.floor(input.length / 2),
    left = input.slice(0, middle),
    right = input.slice(middle);

  return merge<T>(mergeSort<T>(left), mergeSort<T>(right));
}

console.log(
  mergeSort<number>([6, 5, 3, 1, 8, 7, 2, 4])
);
