import Stack from "../dataStructures/stack";

const string1 = "{([)]}"; // -> FALSE
const string2 = "{[()]}"; // -> TRUE
const string3 = "{[]()}"; // -> TRUE

function solution(str: string = string1): boolean {
  if (!str.length) return true;
  if (str.length % 2) return false;

  const stack = new Stack<string>(),
    brackets = {
      "}": "{",
      "]": "[",
      ")": "(",
    };

  for (let i = 0; i < str.length; i++) {
    const el = str[i];

    if (brackets[el]) {
      const poppedEl = stack.pop();

      if (poppedEl !== brackets[el]) return false;

      continue;
    }

    stack.push(el);
  }

  return stack.size() ? false : true;
}

console.log(solution(string3));
