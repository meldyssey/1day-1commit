const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `/dev/stdin` : `${currentDir}/input.txt`;
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function solution(input) {
  const [n, k] = input;
  let answer = [];
  let arrNum = Array.from({ length: n }, (_, i) => i + 1);
  let curIdx = 0;
  while (arrNum.length > 0) {
    curIdx = (curIdx + k - 1) % arrNum.length;
    // console.log(curIdx);
    // console.log(arrNum[curIdx]);
    answer.push(arrNum.splice(curIdx, 1)[0]);
  }
  console.log(`<${answer.join(", ")}>`);
}
solution(input);

/**
  curIdx = 2
  1, 2, 3, 4, 5, 6, 7
  3
  curIdx = 4
  1,2,4,5,6,7
  6
  curIdx = 6 -> 1
  1,2,4,5,7
  2
 */
