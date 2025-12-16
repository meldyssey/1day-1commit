const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const [N, A, M, input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

function solution(input) {
  let AArr = A.split(" ").map(Number);
  let inputArr = input.split(" ").map(Number);
  let ASet = new Set(AArr);
  let answer = [];
  for (let i = 0; i < M; i++) {
    answer[i] = ASet.has(inputArr[i]) ? 1 : 0;
  }
  console.log(answer.join("\n"));
}
solution(input);
