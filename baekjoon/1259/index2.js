const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `/dev/stdin` : `${currentDir}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  // console.log(input);

  for (let i = 0; i < input.length - 1; i++) {
    let str = input[i];
    let strArr = input[i].split("");
    let strRev = input[i].split("").reverse().join("");
    // console.log(strRev);
    if (str === strRev) {
      console.log("yes");
    } else {
      console.log("no");
    }
  }
}
solution(input);
