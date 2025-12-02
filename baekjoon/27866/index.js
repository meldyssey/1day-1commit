const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath = process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  let answer = input[0].slice(Number(input[1]-1),Number(input[1]));  
  console.log(answer);
}
solution(input);