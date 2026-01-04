const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  for (let i = 0; i < input.length; i++) {
    const inputArr = input[i].toString().trim().split(" ");
    const repeatNum = +inputArr[0];
    const str = inputArr[1];
    let strRepeat = "";
    for (let j = 0; j < str.length; j++) {
      strRepeat += str[j].repeat(repeatNum);
    }
    console.log(strRepeat);
  }
}
solution(input);
