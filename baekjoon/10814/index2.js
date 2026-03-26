const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `/dev/stdin` : `${currentDir}/input.txt`;
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  // console.log(input);
  const member = input.map((v) => v.split(" "));
  // console.log(member);
  member.sort((a, b) => {
    return Number(a[0]) - Number(b[0]);
  });
  console.log(member.map((v) => v.join(" ")).join("\n"));
}
solution(input);
