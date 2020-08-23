const numbers = [0, 56, 99, 5, 24, 87, 63, 254, 1, 25, 7];

(function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[0]) {
      arr.unshift(arr.splice(i, 1)[0]); // move to the first position
    } else {
      for (let j = 1; j < i; j++) {
        if (arr[i] > arr[j - 1] && arr[i] < arr[j])
          arr.splice(j, 0, arr.splice(i, 1)[0]); // move to the right spot
      }
    }
  }
})(numbers);

console.log(numbers);
