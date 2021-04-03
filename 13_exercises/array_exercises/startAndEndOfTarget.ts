import binarySearch from "./binarySearch";

const input1 = [1, 3, 3, 5, 5, 5, 8, 9]; // -> [3, 5]

function solution(target: number, input = input1) {
  if (input.length < 1) return [-1, -1];
  const firstIndex = binarySearch<number>(input, 0, input.length - 1, target);

  if (firstIndex === -1) return [-1, -1];

  let startIndex = firstIndex,
    endIndex = firstIndex,
    temp1: number,
    temp2: number;

  while (startIndex !== -1) {
    temp1 = startIndex;
    startIndex = binarySearch(input, 0, startIndex - 1, target);
  }

  startIndex = temp1;

  while (endIndex !== -1) {
    temp2 = endIndex;
    endIndex = binarySearch(input, endIndex + 1, input.length - 1, target);
  }

  endIndex = temp2;

  return [startIndex, endIndex];
}

console.log(solution(5));
