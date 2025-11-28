const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath = process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
    for(let i=1; i<=9; i++){
      console.log(`${input} * ${i} = ${input*i}`)
    }
}
solution(input);