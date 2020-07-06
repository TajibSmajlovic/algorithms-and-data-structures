const { performance } = require('perf_hooks');

(function findNemo(arr) {
    let largeArr = new Array(100000).fill("nemo")
    let t0 = performance.now()

    for(let i = 0; i<largeArr.length; i++ ) {
        if(largeArr[i] === "nemo") {
          console.log("Found NEMO!")
          break;
        }
    }

    let t1 = performance.now()

    console.log("Fnc took " + (t1 - t0) + " miliseconds")
})(["nemo2", "nemo3", "nemo5", "nemo89", "nemo9", "nemo", "nemo0", "nemo4", "nemo3", "nemo2"])

// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
    let a = 10;
    a = 50 + 3;
  
    for (let i = 0; i < input.length; i++) {
      anotherFunction();
      let stranger = true;
      a++;
    }
    return a;
  } // O(3 + 4n)

  function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    console.log(items[0]);

    var middleIndex = Math.floor(items.length / 2);
    var index = 0;

    while (index < middleIndex) {
        console.log(items[index]);
        index++;
    }

    for (var i = 0; i < 100; i++) {
        console.log('hi');
    }
} // O(n)

//Log all pairs of array

const boxes = ['a', 'b', 'c', 'd', 'e'];
function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j])
    }
  }
}

logAllPairsOfArray(boxes)

function printAllNumbersThenAllPairSums(numbers) {

  console.log('these are the numbers:');
  numbers.forEach(function(number) {
    console.log(number);
  });

  console.log('and these are their sums:');
  numbers.forEach(function(firstNumber) {
    numbers.forEach(function(secondNumber) {
      console.log(firstNumber + secondNumber);
    });
  });
}

printAllNumbersThenAllPairSums([1,2,3,4,5]) // O(n^2)

//#5 Space complexity O(1)
function boooo(n) {
  for (let i = 0; i < n; i++) {
      console.log('booooo');
  }
}

// #6 Space complexity O(n)
function arrayOfHiNTimes(n) {
  var hiArray = [];
  for (let i = 0; i < n; i++) {
      hiArray[i] = 'hi';
  }
  return hiArray;
}

arrayOfHiNTimes(6)