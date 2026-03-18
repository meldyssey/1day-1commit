const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `/dev/stdin` : `${currentDir}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const length = +input[0];
  const r = 31;
  const mod = 1234567891;
  const stringArr = input[1];
  let power = 1;
  // console.log(stringArr.charCodeAt(0) - 96);
  let answer = 0;
  for (let i = 0; i < stringArr.length; i++) {
    const charValue = stringArr.charCodeAt(i) - 96;
    answer = (answer + charValue * power) % mod;
    power = (power * r) % mod;
  }
  console.log(answer);
}
solution(input);
