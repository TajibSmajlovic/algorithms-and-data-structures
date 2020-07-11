// const strings= ['a', 'b', 'c', 'd'];
// const numbers = [1,2,3,4,5];
// // Variable array is somewhere in memory and the computer knows it.
// // When I do array[2], i'm telling the computer, hey go to the array and grab the 3rd item from where the array is stored.


// //push
// strings.push('e');

// //pop
// strings.pop();
// strings.pop();

// //unshift
// strings.unshift('x')

// //splice
// strings.splice(2, 0, 'alien');

// console.log(strings)


// class MyArray {
//   constructor() {
//     this.length = 0;
//     this.data = {};
//   }
//   get(index) {
//     return this.data[index];
//   }
//   push(item) {
//     this.data[this.length] = item;
//     this.length++;
//     return this.data;
//   }
//   pop() {
//     const lastItem = this.data[this.length - 1];
//     delete this.data[this.length - 1];
//     this.length--;
//     return lastItem;
//   }
//   deleteAtIndex(index) {
//     const item = this.data[index];
//     this.shiftItems(index);
//     return item;
//   }
//   shiftItems(index) {
//     for (let i = index; i < this.length - 1; i++) {
//       this.data[i] = this.data[i + 1];
//     }
//     console.log(this.data[this.length - 1]);
//     delete this.data[this.length - 1];
//     this.length--;
//   }
// }

// const myArray = new MyArray();
// myArray.push('hi');
// myArray.push('you');
// myArray.push('!');
// myArray.pop();
// myArray.deleteAtIndex(0);
// myArray.push('are');
// myArray.push('nice');
// myArray.shiftItems(0);
// console.log(myArray);


// (function reverseString(str) {
//   if(!str || typeof str !== "string" || str.length < 2) return

//   let reversedString = []

//   for(let i = str.length -1; i > -1; i--) {
//         reversedString.push(str[i])
//     }

//     console.log(reversedString.join(""))
//     return reversedString.join("")
// })("Hello, my name is Tajib!")

// (function reverse(str) {
//     if(!str || typeof str !== "string" || str.length < 2) return
  
//     return str.split("").reverse().join("")
//   })("!bijaT si eman ym ,olleH")

// const reverse = str => [...str].reverse().join("")


// MERGE two sorted arrays
(function mergeSortedArrays(arr1, arr2) {
    if(!Array.isArray(arr1) || !Array.isArray(arr2)) return "Error"
    if(arr1.length === 0 && arr2.length === 0) return "Error"
    if(arr1.length === 0) return arr2
    if(arr2.length === 0) return arr1

    const mergedArray = []
    let a1 = arr1[0]
    let a2 = arr2[0]
    let i = 1
    let j = 1

    while(a1 || a2) {
        if(!a2 ||  a1 < a2) {
            mergedArray.push(a1)
            a1 = arr1[i]
            i++
        } else {
            mergedArray.push(a2)
            a2 = arr2[j]
            j++
        }
    }

    return mergedArray
})([0,3,4,31], [4,6,30])