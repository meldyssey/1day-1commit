const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `/dev/stdin` : `${currentDir}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  // console.log(input);
  let sum = 0;
  let starIdx = 0;
  for (let i = 0; i < input.length; i++) {
    const str = input[i];
    if (str === "*") {
      starIdx = i;
      // 홀수
    } else if (i % 2) {
      sum += +str * 3;
      // 짝수
    } else {
      sum += +str;
    }
  }
  // console.log(starIdx);
  if (starIdx % 2) {
    // x*3을 더했을 때 전체 합이 mod 10 == 0이 되는 x 탐색
    for (let x = 0; x <= 9; x++) {
      if ((sum + x * 3) % 10 === 0) {
        console.log(x);
        break;
      }
    }
  } else {
    console.log((10 - (sum % 10)) % 10); // %10 추가로 0 처리
  }
}
solution(input);
