const s = "A man, a plan, a canal: Panama";

function isPalindrome(str: string = s) {
  str = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  let p1 = 0,
    p2 = str.length - 1;

  while (p1 <= p2) {
    if (str[p1] !== str[p2]) return false;

    p1++;
    p2--;
  }

  return true;
}

console.log(isPalindrome());

function isPalindrome2(str: string = s) {
  str = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  // initialize left/right pointers to point at the middle index of the string. Remember, indexes start at 0 meaning that we have to floor() the value from dividing length by 2 in order to get the index of the center.
  let left = Math.floor(str.length / 2),
    right = left;

  // if the string is even, move left pointer back by 1 so left/right are pointing at the 2 middle values respectively.
  if (str.length % 2 === 0) {
    left--;
  }

  // loop through the string while expanding pointers outwards comparing the characters.
  while (left >= 0 && right < str.length) {
    if (str[left] !== str[right]) {
      return false;
    }

    left--;
    right++;
  }

  return true;
}

console.log(isPalindrome2());

function isPalindrome3(str: string = s) {
  str = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  const reversedStr = str.split("").reverse().join("");

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== reversedStr[i]) return false;
  }

  return true;
}

console.log(isPalindrome3());
