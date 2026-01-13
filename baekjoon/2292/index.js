const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const n = +input;
  let answer = 1;
  let lastNum = 1;
  while (n > lastNum) {
    // console.log(`n: ${n}, lastNum: ${lastNum}`);
    lastNum += 6 * answer;
    answer++;
    console.log(answer);
  }
  console.log(answer);
}
solution(input);
// solution(39);
