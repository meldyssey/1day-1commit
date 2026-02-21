const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  let n = Number(input);
  let answer = 0;
  while (n >= 0) {
    if (n % 5 === 0) {
      answer += Math.floor(n / 5);
      console.log(answer);
      return;
    }
    n -= 3;
    answer += 1;
  }
  console.log(-1);
}
solution(input);
