const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `/dev/stdin` : `${currentDir}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  let weight = +input;
  let answer = 0;
  while (weight >= 0) {
    if (weight % 5 === 0) {
      answer += Math.floor(weight / 5);
      console.log(answer);
      return;
    }
    weight -= 3;
    answer += 1;
  }
  console.log(-1);
}
solution(input);
