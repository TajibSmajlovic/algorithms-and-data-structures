const letters = ["a", "y", "g", "b", "t", "s"];
const words = ["bus", "avion", "car", "truck", "compass"];
const numbers = [5, 8, 18, 2, 32, 14, 11];

console.log(letters.sort());
console.log(words.sort((a, b) => a.localeCompare(b)));
console.log(numbers.sort((a, b) => a - b));

//* When to use:
// #1 - Sort 10 schools around your house by distance: insertionSort
// #2 - eBay sorts listings by the current Bid amount: radix or counting sort
// #3 - Sport scores on ESPN: quickSort
// #4 - Massive database (can't fit all into memory) needs to sort through past year's user data: mergeSort
// #5 - Almost sorted Udemy review data needs to update and add 2 new reviews: insertionSort
// #6 - Temperature Records for the past 50 years in Canada: radix or counting sort || quickSort
// #7 - Large user name database needs to be sorted. Data is very random: mergeSort || quickSort
// #8 - You want to teach sorting for the first time: bubbleSort
