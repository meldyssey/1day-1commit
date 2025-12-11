const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath = process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split(' ');

function solution(input) {
  let [n, k] = input.map(Number)
  let nFac = 1
  let kFac = 1
  let nkFac = 1
  for(let i=1; i<=n; i++){
    nFac *= i
  }
  for(let i=1; i<=k; i++){
    kFac *= i
  }
  for(let i=1; i<=n-k; i++){
    nkFac *= i
  }
  let answer = nFac/(kFac*nkFac);
  console.log(answer);
}
solution(input);