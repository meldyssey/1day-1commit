const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  let inputArr = input[0].split(" ").map(Number);

  console.log(`${Math.min(...inputArr)} ${Math.max(...inputArr)}`);
}
solution(input);
