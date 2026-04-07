const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `/dev/stdin` : `${currentDir}/input.txt`;
const [size, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

function solution(input) {
  const [m, n] = size.split(" ").map(Number);
  // console.log(m, n);
  const board = input;
  // console.log(input);
  let minCnt = Infinity;

  for (let i = 0; i <= m - 8; i++) {
    for (let j = 0; j <= n - 8; j++) {
      let countW = 0; // 흰색 시작
      let countB = 0; // 검은색 시작

      for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
          const cur = board[i + x][j + y];
          if ((x + y) % 2) {
            // x + y가 홀수
            if (cur !== "B") countW++;
            if (cur !== "W") countB++;
          } else {
            // x + y가 짝수
            if (cur !== "W") countW++;
            if (cur !== "B") countB++;
          }
          // console.log(cur);
        }
      }
      minCnt = Math.min(minCnt, countW, countB);
    }
  }
  console.log(minCnt);
}
solution(input);
