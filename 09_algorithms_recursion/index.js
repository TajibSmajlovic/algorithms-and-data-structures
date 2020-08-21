// let counter = 0

// function inception() {
//     if(counter > 3) return "Done!"

//     counter++
//     return inception()
// }

// inception()


// FACTORIAL
// function iterativeFactorial(n) {
//     if(n === 0) return 0

//     let sum = n

//     for(let i = n - 1; i > 0; i-- ) {
//         sum *= i
//     }

//     return sum
// }

// console.log(iterativeFactorial(2))

// function recursiveFactorial(n) {
//     if(n === 0) return 0
//     if(n === 1) return 1

//     return n * recursiveFactorial(n - 1)
// }

// console.log(recursiveFactorial(2))


// FIBONACCI
function iterativeFibonacci(n) {
    let arr = [0, 1]

    for (let i = 2; i <= n ; i++) 
        arr.push(arr[i - 2] + arr[i - 1])

    return arr[n]    
}

function recursiveFibonacci(n) {
    if (n < 2) return n

    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
}

console.log(iterativeFibonacci(8))


function reverseStringRecursive (str) {
    if (str === "") {
      return "";
    } else {
      return reverseStringRecursive(str.substr(1)) + str.charAt(0);
    }
  }
  
  reverseStringRecursive('yoyo master');