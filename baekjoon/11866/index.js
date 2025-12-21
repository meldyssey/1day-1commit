const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split(" ");

function solution(input) {
  const n = parseInt(input[0]);
  const k = parseInt(input[1]);
  let arr = Array.from({ length: n }, (_, i) => i + 1);
  let cur = 0;
  let answer = [];
  while (arr.length > 0) {
    // 제거 인덱스 찾기
    cur = (cur + k - 1) % arr.length;
    answer.push(arr.splice(cur, 1)[0]);
  }
  console.log(`<${answer.join(", ")}>`);
}
solution(input);
