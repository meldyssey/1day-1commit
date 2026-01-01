const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  let answer = 0;
  let timeArr = input[0].split(" ").map(Number);
  // 기본 sort()는 문자정렬 이므로 숫자 정렬일 경우 명시적으로
  timeArr.sort((a, b) => a - b);
  for (let i = 0; i < timeArr.length; i++) {
    let timeSum = 0;
    for (let j = 0; j <= i; j++) {
      timeSum += timeArr[j];
    }
    answer += timeSum;
  }
  console.log(answer);
}
solution(input);
