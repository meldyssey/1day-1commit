const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `/dev/stdin` : `${currentDir}/input.txt`;
const [n, input] = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const score = input.split(" ").map(Number);
  const maxScore = Math.max(...score);
  // console.log(maxScore);
  const newScore = score.map((v) => (v / maxScore) * 100);
  // console.log(newScore);
  const newSum = newScore.reduce((acc, cur) => acc + cur);
  const average = newSum / Number(n);
  console.log(average);
}
solution(input);
