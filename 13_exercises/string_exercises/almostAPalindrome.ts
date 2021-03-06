const str = "abccdba";

function validSubPalindrome(s, start, end) {
  while (start < end) {
    if (s[start] !== s[end]) return false;

    start++;
    end--;
  }
  return true;
}

function validPalindrome(s: string = str) {
  let start = 0,
    end = s.length - 1;

  while (start < end) {
    if (s[start] !== s[end])
      return (
        validSubPalindrome(s, start + 1, end) ||
        validSubPalindrome(s, start, end - 1)
      );

    start++;
    end--;
  }
  return true;
}

console.log(validPalindrome());
