const s = "abcbda";
const s2 = "terertzg";

// Test solution (NOTE: DOESN'T WORK on all cases)
function testSolution(str = s) {
  const lowered = str.toLowerCase().split(""),
    set = new Set();
  let highestLength = 0,
    p = 0;

  while (p < lowered.length) {
    const l = lowered[p];

    if (set.has(l)) {
      if (set.size > highestLength) highestLength = set.size;

      set.clear();
      p--;
    } else {
      set.add(l);
      p++;

      if (p === lowered.length && set.size > highestLength)
        highestLength = set.size;
    }
  }

  return highestLength;
}

console.log(testSolution(s2));
////

// Brute force solution
const bruteForceSolution = function (s) {
  if (s.length <= 1) return s.length;

  let longest = 0;

  for (let left = 0; left < s.length; left++) {
    let seenChars = {},
      currentLength = 0;

    for (let right = left; right < s.length; right++) {
      const currentChar = s[right];

      if (!seenChars[currentChar]) {
        currentLength++;
        seenChars[currentChar] = true;
        longest = Math.max(longest, currentLength);
      } else {
        break;
      }
    }
  }

  return longest;
};

console.log(bruteForceSolution(s2));
////

// Optimized solution
function optimizedSolution(str = s) {
  if (str.length <= 1) return str.length;

  const seenChars = new Map();
  let longest = 0,
    left = 0;

  for (let right = 0; right < str.length; right++) {
    const currentChar = s[right];
    const prevSeenChar = seenChars.get(currentChar);

    if (prevSeenChar >= left) left = prevSeenChar + 1;

    seenChars.set(currentChar, right);

    longest = Math.max(longest, right - left + 1);
  }

  return longest;
}

console.log(optimizedSolution(s2));
////
