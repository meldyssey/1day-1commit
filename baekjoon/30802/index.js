const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath = process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  let answerT = 0;
  let answerP = [];
  let [T, P] = input[1].split(" ").map(v => Number(v))
  let size = input[0].split(" ").map(v => Number(v))
  answerP.push(Math.floor(Number(N)/Number(P)))
  answerP.push(Number(N)%Number(P))
  for(let i=0; i<size.length; i++){
    answerT += Math.ceil(size[i]/Number(T))
  }
  console.log(answerT);
  console.log(answerP.join(" "));
}
solution(input);