const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const n = +input;
  const dp = new Array(n + 1).fill(0);

  dp[1] = 0;

  // console.log(dp);

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + 1;

    if (i % 2 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    }

    if (i % 3 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 3] + 1);
    }
  }
  console.log(dp[n]);
}
solution(input);

/*
dp[1] = 0
dp[2] = 1 
dp[3] = 1
dp[4] = 2
dp[5] = 1 + dp[4] = 3
dp[6] = 1 + dp[3] or 1 + dp[2] or 1 + dp[5] 
.
.
.

*/
