const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const [k, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

function solution(input) {
  // console.log(input);
  let answer = [];
  for (let i = 0; i < k; i++) {
    if (input[i] === 0) {
      answer.pop();
    } else {
      answer.push(input[i]);
    }
  }
  let sum = answer.reduce((acc, cur) => acc + cur, 0);
  console.log(sum);
}
solution(input);
