/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const merge = (left, right) => {
  const res = []

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      res.push(left.shift())
    } else {
      res.push(right.shift())
    }
  }

  return res.concat(left, right)
}

const mergeSort = (nums) => {
  if (nums.length < 2) {
    return nums
  }

  const middleIndex = Math.ceil(nums.length / 2);
  const left = nums.splice(0, middleIndex)
  const right = nums.splice(-middleIndex)

  return merge(mergeSort(left), mergeSort(right))
};

// unit tests
// do not modify the below code
test.skip("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
