const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const n = +input;
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    let num = i; // 현재 수를 복사 (원본 i 보존)
    while (num % 5 === 0) {
      // 5로 나누어떨어지면 true로 계속 진행
      answer++; // 5를 하나 발견하여 +1
      num /= 5; // 5를 제거하고 다음 5 찾기
    }
  }
  return console.log(answer);
}
solution(input);
// solution(30);
