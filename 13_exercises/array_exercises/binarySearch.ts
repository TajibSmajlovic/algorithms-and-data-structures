// only for sorted arrays
function binarySearch<T>(input: T[], left: number, right: number, target: T) {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const foundVal = input[mid];
    if (foundVal === target) {
      return mid;
    } else if (foundVal < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

export default binarySearch;
