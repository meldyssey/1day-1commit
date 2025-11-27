const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath = process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split(' ');

function solution(input) {
  let answer = 0;
  for(let i=0; i<input.length; i++){    
    answer += Number(input[i])**2
  }
  console.log(answer%10);
}
solution(input);