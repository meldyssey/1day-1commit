const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `/dev/stdin` : `${currentDir}/input.txt`;
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  let inputArr = input.map((v) => v.split(" ").map(Number));
  // console.log(inputArr);
  inputArr.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });
  console.log(inputArr.map((v) => v.join(" ")).join("\n"));
}
solution(input);
