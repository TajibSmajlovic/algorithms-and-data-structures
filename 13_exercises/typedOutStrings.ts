const s1 = "ab#c###asd#ads#"; // -> asad
const t1 = "az#c###asr#asd#"; // -> sasa

// Test solutions
function testStringProcessing(arr) {
  const output = [];
  let toSkip = 0;

  for (let i = arr.length - 1; i > -1; i--) {
    if (arr[i] === "#") {
      toSkip++;
      continue;
    }

    if (toSkip > 0) {
      toSkip--;
      continue;
    }

    output.unshift(arr[i]);
  }

  return output.join("");
}

function testSolution(S: string = s1, T: string = t1) {
  return testStringProcessing(S) === testStringProcessing(T);
}

console.log(testSolution());

function testStringProcessing2(arr: string[]) {
  let toSkip = 0;

  for (let i = arr.length - 1; i > -1; i--) {
    if (arr[i] === "#") {
      toSkip++;
      continue;
    }

    if (toSkip > 0) {
      toSkip--;
      continue;
    }

    arr.unshift(arr[i]);
  }

  return arr.join("");
}

function testSolution2(S: string = s1, T: string = t1) {
  return (
    testStringProcessing2(S.split("")) === testStringProcessing2(T.split(""))
  );
}

console.log(testSolution2());
////

// Brute force solution
function stringProcessing(arr: string) {
  const output = [];

  for (let i = 0; i < arr.length; i++) {
    if (output.length && arr[i] === "#") output.pop();

    if (arr[i] !== "#") output.push(arr[i]);
  }

  return output.join("");
}

function bruteForceSolution(S: string = s1, T: string = t1) {
  return stringProcessing(S) === stringProcessing(T);
}

console.log(bruteForceSolution());
////

// Optimized solution
function optimizedSolution(S: string = s1, T: string = t1) {
  let p1 = S.length - 1,
    p2 = T.length - 1;

  while (p1 >= 0 || p2 >= 0) {
    if (S[p1] === "#" || T[p2] === "#") {
      if (S[p1] === "#") {
        let backCount = 2;

        while (backCount > 0) {
          p1--;
          backCount--;

          if (S[p1] === "#") {
            backCount += 2;
          }
        }
      }

      if (T[p2] === "#") {
        let backCount = 2;

        while (backCount > 0) {
          p2--;
          backCount--;

          if (T[p2] === "#") {
            backCount += 2;
          }
        }
      }
    } else {
      if (S[p1] !== T[p2]) {
        return false;
      } else {
        p1--;
        p2--;
      }
    }
  }

  return true;
}

console.log(optimizedSolution());
