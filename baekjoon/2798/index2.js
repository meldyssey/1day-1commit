const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `/dev/stdin` : `${currentDir}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [n, m] = input[0].split(" ").map(Number);
  const numArr = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  // console.log(n, m);
  // console.log(numArr);
  let sumArr = [];
  for (let i = 0; i < numArr.length - 2; i++) {
    for (let j = i + 1; j < numArr.length - 1; j++) {
      for (let k = j + 1; k < numArr.length; k++) {
        let sum = numArr[i] + numArr[j] + numArr[k];
        if (sum <= m) {
          sumArr.push(sum);
        } else {
          break;
        }
      }
    }
  }
  // console.log(sumArr);
  let answer = sumArr.filter((v) => v <= m);
  console.log(Math.max(...answer));
}
solution(input);
