const { log } = require("console");
const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `/dev/stdin` : `${currentDir}/input.txt`;
const [N, input] = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  let n = Number(N);
  // console.log(input);
  let num = input.split(" ").map(Number);
  let count = 0;
  for (let i = 0; i < num.length; i++) {
    let divisorCnt = 0;
    for (let j = 1; j <= num[i]; j++) {
      if (num[i] % j === 0) {
        divisorCnt++;
      }
    }
    // console.log(divisorCnt);
    if (divisorCnt === 2) count++;
  }
  console.log(count);
}
solution(input);
