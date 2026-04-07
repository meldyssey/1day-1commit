const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `/dev/stdin` : `${currentDir}/input.txt`;
const [testCnt, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

function solution(input) {
  for (let i = 0; i < +testCnt; i++) {
    const [n, m] = input[i * 2].split(" ").map(Number);
    let queue = input[i * 2 + 1].split(" ").map((v, i) => [Number(v), i]);
    // console.log(queue);
    let printOrder = 0;
    while (queue.length > 0) {
      const current = queue[0];
      const hasHigher = queue.some((doc) => doc[0] > current[0]);
      if (hasHigher) {
        queue.push(queue.shift());
      } else {
        queue.shift();
        printOrder++;
        if (current[1] === m) {
          console.log(printOrder);
          break;
        }
      }
    }
  }
}
solution(input);
