const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `/dev/stdin` : `${currentDir}/input.txt`;
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  let inputSet = new Set(input);
  let inputArr = [...inputSet];
  inputArr.sort((a, b) => {
    //
    if (a.length !== b.length) {
      // 길이 오름차순
      return a.length - b.length;
    }
    // 길이 같으면 사전순
    return a.localeCompare(b);
  });
  console.log(inputArr.join("\n"));
}
solution(input);
