const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

/**
문제 풀이 순서

처음 들어가는 숫자와 Arr 첫번째를 비교하여 Arr이 크면 그 숫자까지 push
반대로 작으면 answerArr 그 숫자까지 pop

*/

function solution(input) {
  const count = Number(n);
  const finalArr = input.map(Number);

  let stack = [];
  let next = 1; // 다음에 push할 숫자(1부터 시작)
  let answer = [];
  let possible = true;

  for (let i = 0; i < finalArr.length; i++) {
    let target = finalArr[i];

    while (next <= target) {
      stack.push(next);
      answer.push("+");
      next++;
    }

    // top이 target이면 pop
    if (stack[stack.length - 1] === target) {
      stack.pop();
      answer.push("-");
    } else {
      // top이 target 보다 크면 불가능
      possible = false;
      break;
    }
  }
  console.log(possible ? answer.join("\n") : "NO");
}
solution(input);
