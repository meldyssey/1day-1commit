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
  // 이미 계산한 것은 불러와서 계산 최소화
  const memo = {};

  for (let i = 0; i < input.length; i++) {
    let zeroCnt = 0;
    let oneCnt = 0;

    function fibonacci(num) {
      if (memo[num]) {
        zeroCnt += memo[num].zero;
        oneCnt += memo[num].one;
        return;
      }

      if (num === 0) {
        zeroCnt++;
        memo[num] = { zero: 1, one: 0 };
      } else if (num === 1) {
        oneCnt++;
        memo[num] = { zero: 0, one: 1 };
      } else {
        fibonacci(num - 1);
        fibonacci(num - 2);

        memo[num] = {
          zero: zeroCnt,
          one: oneCnt,
        };
      }
    }
    fibonacci(input[i]);
    console.log(`${zeroCnt} ${oneCnt}`);
  }
}
solution(input);
