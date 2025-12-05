const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath = process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  for(let i=0; i<input.length-1; i++){
    const [A, B, C] = input[i].split(" ").map(v => Number(v)).sort((a, b) => a - b)
    let answer = A**2 + B**2 === C**2 ? "right" : "wrong"  
    console.log(answer);
  }
}
solution(input);
