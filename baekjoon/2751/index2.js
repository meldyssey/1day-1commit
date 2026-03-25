const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `/dev/stdin` : `${currentDir}/input.txt`;
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  let inputArr = input.map(Number);
  let sortInput = inputArr.sort((a, b) => a - b);
  console.log(sortInput.join("\n"));
}
solution(input);
