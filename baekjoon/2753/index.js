const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath = process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  if((!(input % 4) && input % 100) || !(input % 400)){
    console.log(1);
    return;
  } 
  console.log(0);
}
solution(input);