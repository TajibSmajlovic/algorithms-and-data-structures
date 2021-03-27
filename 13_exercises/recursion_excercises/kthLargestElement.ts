import { quickSort } from "../sorting_excercises/quickSort";
import { quickSelect } from "../sorting_excercises/quickSelect";

const input1 = [5, 3, 1, 6, 4, 2];

function solutionWithQuickSort<T>(input: T[], k: number) {
  const indexToFind = input.length - k;
  quickSort(input, 0, input.length - 1);

  return input[indexToFind];
}

function solutionWithQuickSelect<T>(input: T[], k: number) {
  const indexToFind = input.length - k;

  return quickSelect(input, 0, input.length - 1, indexToFind);
}

console.log(solutionWithQuickSort<number>(input1, 2));
console.log(solutionWithQuickSelect<number>(input1, 2));
