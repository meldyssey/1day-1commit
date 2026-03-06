const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const [n, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

/**
문제해석
아래 4가지 계산
- 산술평균
- 중앙값
- 최빈값 **
- 범위

 */

function solution(input) {
  const sortArr = input.sort((a, b) => a - b);
  // console.log(sortArr);
  const sum = sortArr.reduce((acc, cur) => acc + cur);

  const average = Math.round(sum / n);
  const middle = sortArr[Math.floor(n / 2)];
  const range = sortArr[n - 1] - sortArr[0];
  const countArr = {};
  for (let i = 0; i < sortArr.length; i++) {
    if (sortArr[i] in countArr) {
      countArr[sortArr[i]]++;
    } else {
      countArr[sortArr[i]] = 1;
    }
  }
  // 객체에서 value 불러올 떄, Object.values(객체명)
  const maxCount = Math.max(...Object.values(countArr));
  // 객체에서 keys 불러올 떄, Object.keys(객체명)
  const modes = Object.keys(countArr)
    .map(Number)
    .filter((num) => countArr[num] === maxCount)
    .sort((a, b) => a - b);

  const mode = modes.length >= 2 ? modes[1] : modes[0];

  // console.log(countArr);
  // 산술평균 -0으로 나오는 경우 유의(문제 잘 읽기)
  console.log(average === -0 ? 0 : average);
  // 중앙값
  console.log(middle);
  // 최빈값
  console.log(mode);
  // 범위
  console.log(range);
}
solution(input);
