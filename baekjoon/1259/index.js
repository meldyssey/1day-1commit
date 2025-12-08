const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath = process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  let answer = '';
  for(let i=0; i<input.length-1; i++){
    let origin = [...input[i].split("")];
    let reverse = input[i].split("").reverse();
    if(origin.join("") === reverse.join("")){
      console.log("yes")
    }else{
      console.log("no")
    }
  }
}
solution(input);