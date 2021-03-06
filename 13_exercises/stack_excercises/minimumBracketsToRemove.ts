import Stack from "../dataStructures/stack";

const str1 = "(ab(c)d";
const str2 = ")))(((";

function solution(str: string = str1) {
  const res = str.split("");
  const stack = new Stack<number>();

  for (let i = 0; i < res.length; i++) {
    if (res[i] === "(") {
      stack.push(i);
    } else if (res[i] === ")" && stack.size()) {
      stack.pop();
    } else if (res[i] === ")") {
      res[i] = "";
    }
  }

  while (stack.size()) {
    const currentIndex = stack.pop();

    res[currentIndex] = "";
  }

  return res.join("");
}

console.log(solution(str2));
