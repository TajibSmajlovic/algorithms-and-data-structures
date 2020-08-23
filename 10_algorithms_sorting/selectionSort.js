const numbers = [0, 56, 99, 5, 24, 87, 63, 254, 1, 25, 7];

(function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i; // index
    let temp = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }

    arr[i] = arr[min];
    arr[min] = temp;
  }
})(numbers);

console.log(numbers);
