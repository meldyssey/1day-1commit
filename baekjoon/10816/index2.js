const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `/dev/stdin` : `${currentDir}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const n = +input[0];
  const haveNum = input[1].split(" ").map(Number);
  const m = +input[2];
  const findNum = input[3].split(" ").map(Number);
  let answer = [];

  let cntNum = {};
  for (let i = 0; i < n; i++) {
    const curHaveNum = haveNum[i];
    if (cntNum[curHaveNum]) {
      cntNum[curHaveNum]++;
    } else {
      cntNum[curHaveNum] = 1;
    }
  }

  for (let i = 0; i < m; i++) {
    const curFindNum = findNum[i];
    if (curFindNum in cntNum) {
      answer.push(cntNum[curFindNum]);
    } else {
      answer.push(0);
    }
  }
  console.log(answer.join(" "));
}
solution(input);
