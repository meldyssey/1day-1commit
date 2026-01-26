const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const n = +input;
  let factorial = 1;
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  const strFactorial = factorial.toString().split("");
  // console.log(strFactorial);
  for (let i = strFactorial.length - 1; i >= 0; i--) {
    // console.log(strFactorial[i]);
    if (strFactorial[i] !== "0") {
      if (answer !== 0) {
        break;
      }
    }
    if (strFactorial[i] === "0") answer++;
  }
  console.log(answer);
}
solution(input);
