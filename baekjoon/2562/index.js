const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

function solution(input) {
  const maxNum = Math.max(...input);
  console.log(maxNum);
  console.log(input.findIndex((v) => v === maxNum) + 1);
}
solution(input);
