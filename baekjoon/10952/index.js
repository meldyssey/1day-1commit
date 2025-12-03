const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath = process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  input.pop()
  for(let i=0; i<input.length; i++){
    let [A, B] = input[i].split(" ")
    console.log(Number(A)+Number(B))
  }
}
solution(input);