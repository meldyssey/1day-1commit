const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `/dev/stdin` : `${currentDir}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split(" ");

function solution(input) {
  const [a, b, v] = input.map(Number);
  const day = Math.ceil((v - b) / (a - b));
  console.log(day);
}
solution(input);
