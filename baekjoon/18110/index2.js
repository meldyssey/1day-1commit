const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `/dev/stdin` : `${currentDir}/input.txt`;
const [n, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

function solution(input) {
  let answer = 0;
  if (n === 0) {
    console.log(answer);
    return;
  }
  const exceptNum = Math.round(n * 0.15);
  // console.log(exceptNum);
  input.sort((a, b) => a - b);
  // console.log(input);
  let calcArr = input.slice(exceptNum, input.length - exceptNum);
  let sum = calcArr.reduce((acc, cur) => acc + cur, 0);
  answer = Math.round(sum / calcArr.length);
  console.log(answer);
}
solution(input);
