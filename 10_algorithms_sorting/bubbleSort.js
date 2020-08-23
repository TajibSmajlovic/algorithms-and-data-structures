const numbers = [56, 99, 5, 24, 87, 63, 254, 0, 1, 25, 7];

(function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];

        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
})(numbers);

console.log(numbers);
