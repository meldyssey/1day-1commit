const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split(" ");

function solution(input) {
  const [m, n] = input.map(Number);
  for (let i = m; i <= n; i++) {
    let divideNum = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        divideNum++;
      }
    }
    if (divideNum < 3) {
      console.log(i);
    }
  }
}
solution(input);

// 시간초과
