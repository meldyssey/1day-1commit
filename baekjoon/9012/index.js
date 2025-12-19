const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  for (let i = 0; i < input.length; i++) {
    const chkStr = input[i];
    let cnt = 0;
    for (let j = 0; j < chkStr.length; j++) {
      if (chkStr[j] === "(") {
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
