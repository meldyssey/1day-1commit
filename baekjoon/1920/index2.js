const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `/dev/stdin` : `${currentDir}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const n = +input[0];
  const m = +input[2];
  const arrayA = input[1].split(" ").map(Number);
  const arrayM = input[3].split(" ").map(Number);
  const setA = new Set(arrayA);
  const answer = [];
  for (let i = 0; i < arrayM.length; i++) {
    answer[i] = setA.has(arrayM[i]) ? 1 : 0;
  }
  console.log(answer.join("\n"));
}
solution(input);
