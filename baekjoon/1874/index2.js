const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const count = Number(n);
  const finalArr = input.map(Number); // 숫자로 변환

  let stack = [];
  let next = 1;
  let answer = [];
  let possible = true;
  for (let i = 0; i < finalArr.length; i++) {
    const target = finalArr[i];
    while (next <= target) {
      stack.push(next);
      answer.push("+");
      next++;
    }

    if (stack[stack.length - 1] === target) {
      stack.pop();
      answer.push("-");
    } else {
      possible = false;
      break;
    }
  }
  console.log(possible ? answer.join("\n") : "NO");
}

solution(input);
