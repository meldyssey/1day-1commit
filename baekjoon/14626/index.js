const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split("");

function solution(input) {
  // console.log(input);
  let num = input.slice(0, 12);
  let m = Number(input[12]);

  let sum = 0;
  let starIdx = 0;

  let answer = 0;
  // console.log(num);
  // console.log(m);
  for (let i = 0; i < num.length; i++) {
    if (input[i] === "*") {
      starIdx = i;
    } else if (i % 2 === 0) {
      // idx 짝수
      sum += Number(input[i]);
    } else if (i % 2 !== 0) {
      // idx 홀수
      sum += Number(input[i]) * 3;
    }
  }
  // console.log(sum);
  // console.log(starIdx);
  // console.log(sum);
  if (starIdx % 2) {
    // idx 홀수
    for (let i = 0; i < 10; i++) {
      if ((i * 3) % 10 === 10 - m - (sum % 10)) {
        answer = i;
      }
    }
  } else {
    // idx 짝수
    answer = 10 - m - (sum % 10);
  }
  console.log(answer);
}
solution(input);
