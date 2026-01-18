const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function solution(input) {
  const a = input[0];
  const b = input[1];
  const v = input[2];
  const answer = Math.ceil((v - a) / (a - b)) + 1;

  console.log(answer);
}
solution(input);
