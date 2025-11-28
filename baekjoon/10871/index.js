const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath = process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  const [N, X] = input[0].split(" ")
  const arrayNum = input[1].split(" ").map(v => Number(v))
  const answer = []
  for(let i=0; i<Number(N); i++){
    if(arrayNum[i]<Number(X)){
      answer.push(arrayNum[i])
    }
  }
  console.log(answer.join(" "));
}
solution(input);