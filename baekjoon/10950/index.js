const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath = process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  for(let i=0; i<n; i++){
    [A, B] = input[i].split(' ')
    console.log(Number(A)+Number(B));
  }
}
solution(input);