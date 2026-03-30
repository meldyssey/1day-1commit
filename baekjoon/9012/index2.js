const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `/dev/stdin` : `${currentDir}/input.txt`;
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  // console.log(input);
  for (let i = 0; i < input.length; i++) {
    curStr = input[i];
    let cnt = 0;
    for (let j = 0; j < curStr.length; j++) {
      if (curStr[j] === "(") {
        cnt++;
      } else {
        cnt--;
        if (cnt < 0) {
          break;
        }
      }
    }
    console.log(cnt ? "NO" : "YES");
  }
}
solution(input);
