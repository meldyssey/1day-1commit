const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const n = Number(input[0]);
  const nArr = input[1].split(" ").map(Number);
  const m = Number(input[2]);
  const mArr = input[3].split(" ").map(Number);
  const cnt = {};
  // 먼저 숫자 세기
  for (let i = 0; i < n; i++) {
    const num = nArr[i];
    if (cnt[num]) {
      cnt[num]++;
    } else {
      cnt[num] = 1;
    }
  }
  // 찾는 숫자 개수 확인
  const answer = [];
  for (let i = 0; i < m; i++) {
    const findNum = mArr[i];
    if (cnt[findNum]) {
      answer.push(cnt[findNum]);
    } else {
      answer.push(0);
    }
  }
  console.log(answer.join(" "));
}
solution(input);

// 시간초과
// function solution(input) {
//   const n = Number(input[0]);
//   const nArr = input[1].split(" ").map(Number);
//   const m = Number(input[2]);
//   const mArr = input[3].split(" ").map(Number);
//   let answer = [];
//   for (let i = 0; i < m; i++) {
//     let findNum = nArr.filter((v) => v === mArr[i]);
//     answer.push(findNum.length);
//   }
//   console.log(answer.join(" "));
// }
