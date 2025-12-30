const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const [nm, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [n, m] = nm.split(" ").map(Number);
  const board = input;

  let minCount = Infinity;

  for (let i = 0; i <= n - 8; i++) {
    for (let j = 0; j <= m - 8; j++) {
      let count1 = 0; //패턴이 흰색으로 시작
      let count2 = 0; //패턴이 검은색으로 시작

      for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
          const current = board[i + x][j + y];
          if ((x + y) % 2) {
            // x+y가 홀수
            if (current !== "B") count1++;
            if (current !== "W") count2++;
          } else {
            // x+y가 짝수
            if (current !== "W") count1++;
            if (current !== "B") count2++;
          }
        }
      }
      minCount = Math.min(minCount, count1, count2);
    }
  }
  console.log(minCount);
}
solution(input);
