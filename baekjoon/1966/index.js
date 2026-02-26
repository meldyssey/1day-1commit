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
    let curQueue = input[2 * i].split(" ").map(Number);
    let curDoc = 0;

    for (let j = 0; j < n; j++) {
      restDoc = curQueue.slice(curDoc);
      console.log(restDoc);
      if (curQueue[curDoc] !== Math.max(...restDoc)) {
        curQueue.push(curQueue[curDoc]);
      }
      if (m === curDoc) {
        console.log();
      }
      curDoc++;
    }
  }
}
solution(input);
