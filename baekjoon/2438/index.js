const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath = process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
    for(let i=0; i<input; i++){
      let star = ''
      for(let j=0; j<=i; j++){
        star += '*'
      }
      console.log(star)
    }
}
solution(input);