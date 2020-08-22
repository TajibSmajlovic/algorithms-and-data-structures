const letters = ["a", "y", "g", "b", "t", "s"];
const words = ["bus", "avion", "car", "truck", "compass"];
const numbers = [5, 8, 18, 2, 32, 14, 11];

console.log(letters.sort());
console.log(words.sort((a, b) => a.localeCompare(b)));
console.log(numbers.sort((a, b) => a - b));
