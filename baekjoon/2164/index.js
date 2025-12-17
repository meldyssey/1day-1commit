const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split(" ");

function solution(input) {
  let answer = Array.from({ length: Number(input) }, (_, i) => i + 1);

  let answerIdx = 0;

  while (answerIdx < answer.length - 1) {
    // 맨 위 카드 버리기
    answerIdx++;
    if (answerIdx < answer.length) {
      // 카드를 맨 뒤로
      answer.push(answer[answerIdx]);
      answerIdx++;
    }
  }

  console.log(answer[answer.length - 1]);
}

solution(input);
