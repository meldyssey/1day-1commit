const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split(" ");

function solution(input) {
  const N = +input;
  let count = 0;
  let num = 666;

  while (true) {
    if (num.toString().includes("666")) {
      count++;
      if (count === N) {
        console.log(num);
        return;
      }
    }
    num++;
  }
}
solution(input);
