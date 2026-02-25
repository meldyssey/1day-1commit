const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split(" ");

function solution(input) {
  const [m, n] = input.map(Number);
  const answer = [];
  for (let i = m; i <= n; i++) {
    let isPrime = true;
    if (i < 2) isPrime = false;

    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) answer.push(i);
  }
  console.log(answer.join("\n"));
}
solution(input);
