const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const [t, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

function solution(input) {
  const answer = [];
  for (let i = 0; i < t; i++) {
    const k = input[i * 2]; // 층수
    const n = input[i * 2 + 1]; // 호수
    const apt = Array.from({ length: k + 1 }, () => Array(n + 1).fill(0));
    for (let j = 1; j <= n; j++) {
      apt[0][j] = j;
    }

    for (let floor = 1; floor <= k; floor++) {
      for (let room = 1; room <= n; room++) {
        // 현재 층의 room호는  아래층 1호부터 room호까지의 합
        for (let r = 1; r <= room; r++) {
          apt[floor][room] += apt[floor - 1][r];
        }
      }
    }
    answer.push(apt[k][n]);
  }
  answer.forEach((answer) => console.log(answer));
}
solution(input);
// 0층 1, 2, 3, 4, ..., 14
// 1층
// apt[1][0] = apt[0][0],
// apt[1][1] = apt[0][0] + apt[0][1],
// apt[1][2] = apt[0][0] + apt[0][1] + apt[0][2]
