const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const [nm, num, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

function solution(input) {
  const [n, m] = nm.split(" ").map(Number);
  // console.log(num);
  const arrayNum = num.split(" ").map(Number);
  for (let k = 0; k < input.length; k++) {
    let answer = 0;
    const [i, j] = input[k].split(" ").map(Number);
    for (let l = i - 1; l <= j - 1; l++) {
      answer += arrayNum[l];
    }
    console.log(answer);
  }
}
solution(input);
