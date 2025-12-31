const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const [num, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [n, m] = num.split(" ");
  const noHear = input.slice(0, n);
  const noSee = new Set(input.slice(n));
  let answer = noHear.filter((name) => noSee.has(name));
  answer.sort();
  console.log(answer.length);
  console.log(answer.join("\n"));
}
solution(input);
