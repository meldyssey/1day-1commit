const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `/dev/stdin` : `${currentDir}/input.txt`;
const [k, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const inputArr = input.map(Number);
  let stack = [];
  for (let i = 0; i < inputArr.length; i++) {
    curNum = inputArr[i];
    if (curNum) {
      stack.push(curNum);
    } else {
      stack.pop();
    }
  }
  let stackSum = stack.reduce((acc, cur) => acc + cur, 0);
  console.log(stackSum);
}
solution(input);
