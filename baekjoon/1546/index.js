const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath = process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  let originScore = input[0].split(" ").map(v => Number(v))
  let max = Math.max(...originScore)
  let newScore = originScore.map(score => score/max*100)
  let average = newScore.reduce((acc, cur) => acc + cur) / Number(N)
  console.log(average);
}
solution(input);