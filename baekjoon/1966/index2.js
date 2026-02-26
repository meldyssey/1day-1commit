const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

/*
내가 이해한 문제
현재 Que의 가장 앞에 있는 문서의 중요도와 남은 문서의 중요도를 확인하여 높은 문서가 하나라도 있다면 이 문서를 인쇄하지 않고 Que의 가장 뒤에 재배치 하며 그렇지 않다면 현재 가장 앞에 있는 문서 인쇄
위 과정을 반복




*/

function solution(input) {
  const testCaseCnt = Number(input[0]);
  for (let i = 1; i <= testCaseCnt; i++) {
    const [n, m] = input[2 * i - 1].split(" ").map(Number);
    let queue = input[2 * i].split(" ").map((v, idx) => [Number(v), idx]);
    let printOrder = 0;

    while (queue.length > 0) {
      const current = queue[0];
      // some()은 배열 요소 중 하나라도 조건을 만족하면 true를 반환하는 메서드
      // every()는 모든 요소가 조건을 만족해야 true 반환하는 메서드
      /*
        let hasHigher = false;
        for (let doc of queue) {
          if (doc[0] > current[0]) {
            hasHigher = true;
            break; // 하나라도 찾으면 바로 중단
          }
        }
      */
      const hasHigher = queue.some((doc) => doc[0] > current[0]);
      if (hasHigher) {
        // 뒤로 재배치
        queue.push(queue.shift());
      } else {
        // 인쇄
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
