const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [n, ...level] = input.map(Number);

  // 예외처리 확인하기
  if (n === 0) {
    console.log(0);
    return;
  }

  let sortLevel = level.sort((a, b) => a - b);
  const delCnt = Math.round(n * 0.15);
  let finalArr = sortLevel.slice(delCnt, n - delCnt);
  // 초기값 작성하기
  let sum = finalArr.reduce((acc, cur) => acc + cur, 0);
  console.log(Math.round(sum / finalArr.length));
}
solution(input);
