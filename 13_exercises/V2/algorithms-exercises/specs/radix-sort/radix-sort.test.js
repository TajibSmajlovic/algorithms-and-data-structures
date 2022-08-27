/*

  Implement a radix sort in a function called radixSort.

  You'll probably need several functions
  
  You can implement it using a binary or decimal based bucketing but I'd recommend the decimal based buckets because
  it ends up being a lot more simple to implement.

*/

function getDigit(number, place) {
  const numbers = number.toString().split('')
  
  if (numbers.length <= place) {
    return 0
  }

  return parseInt(numbers[numbers.length - 1 - place])
}

function getLongestNumber(arr) {
  return Math.max(...arr).toString().length
}

function radixSort(array) {
  const longestNumber = getLongestNumber(array)
  const buckets = []

  for (let i = 0; i < 10; i++) {
    buckets[i] = []
  }

  for (let i = 0; i < longestNumber; i++) {
    let curr = 0

    while (curr !== array.length) {
      const digit = getDigit(array[curr], i)
      buckets[digit].push(array[curr])
      curr++
    }

    const newArr = []
    
    for (const bucket of buckets) {
      while(bucket.length) {
        newArr.push(bucket.shift())        
      }
    }

    array = newArr
  }

  return array
}

// unit tests
// do not modify the below code
describe.skip("radix sort", function () {
  it("should sort correctly", () => {
    const nums = [
      20,
      51,
      3,
      801,
      415,
      62,
      4,
      17,
      19,
      11,
      1,
      100,
      1244,
      104,
      944,
      854,
      34,
      3000,
      3001,
      1200,
      633
    ];
    const ans = radixSort(nums);
    expect(ans).toEqual([
      1,
      3,
      4,
      11,
      17,
      19,
      20,
      34,
      51,
      62,
      100,
      104,
      415,
      633,
      801,
      854,
      944,
      1200,
      1244,
      3000,
      3001
    ]);
  });
  it("should sort 99 random numbers correctly", () => {
    const fill = 99;
    const nums = new Array(fill)
      .fill()
      .map(() => Math.floor(Math.random() * 500000));
    const ans = radixSort(nums);
    expect(ans).toEqual(nums.sort(function(a,b){return a - b}));
  });
});
