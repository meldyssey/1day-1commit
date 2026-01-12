const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const num = +input;
  let numList = [];
  for (let i = 0; i < num; i++) {
    let sum = i;
    let iArr = i
      .toString()
      .split("")
      .map((v) => {
        sum += Number(v);
        return Number(v);
      });
    if (sum === num) {
      numList.push(i);
    }
  }
  console.log(numList.length ? Math.min(...numList) : 0);
}
solution(input);
