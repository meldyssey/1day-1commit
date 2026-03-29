const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `/dev/stdin` : `${currentDir}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  for (let i = 0; i < input.length; i++) {
    let stack = [];
    let isValid = true;
    const str = input[i];
    if (str === ".") break;
    for (let j = 0; j < str.length; j++) {
      const curStr = str[j];
      if (curStr === "(" || curStr === "[") {
        stack.push(curStr);
      } else if (curStr === ")") {
        if (stack.length === 0 || stack.pop() !== "(") {
          isValid = false;
          break;
        }
      } else if (curStr === "]") {
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
