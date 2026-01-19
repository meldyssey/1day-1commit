const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const input = fs.readFileSync(filePath, "utf-8").trim().split("\n");
const n = +input[0];

function solution(n: number, input: string[]): void {
  const count = new Array(10001).fill(0);

  for (let i = 1; i <= n; i++) {
    const num = +input[i];
    count[num]++;
  }
  let answer = "";
  for (let i = 1; i <= 10000; i++) {
    for (let j = 0; j < count[i]; j++) {
      answer += i + "\n";
    }
  }
  console.log(answer.trim());
}
solution(n, input);
