const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  for (let i = 0; i < input.length; i++) {
    if (input[i] === ".") break;

    let stack = [];
    let isValid = true;
    let inputStr = input[i].split("");
    for (let j = 0; j < inputStr.length; j++) {
      let char = inputStr[j];

      if (char === "(" || char === "[") {
        stack.push(char);
      } else if (char === ")") {
        if (stack.length === 0 || stack.pop() !== "(") {
          isValid = false;
          break;
        }
      } else if (char === "]") {
        if (stack.length === 0 || stack.pop() !== "[") {
          isValid = false;
          break;
        }
      }
    }
    console.log(stack.length === 0 && isValid ? "yes" : "no");
  }
}
solution(input);
