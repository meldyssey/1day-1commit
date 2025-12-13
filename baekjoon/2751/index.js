const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  let answer = input.sort((a, b) => a - b).join("\n");
  console.log(answer);
}
solution(input);
