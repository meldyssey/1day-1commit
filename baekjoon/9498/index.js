const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath = process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const score = Number(input)
  if((score >= 90)){
    console.log("A");
  } else if(score >= 80){
    console.log("B");
  } else if(score >= 70){
    console.log("C");
  } else if(score >= 60){
    console.log("D");
  } else {
    console.log("F");
  }
}
solution(input);