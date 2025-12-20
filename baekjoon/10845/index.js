const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  let answer = [];
  let front = 0;
  for (let i = 0; i < n; i++) {
    const inputArr = input[i].split(" ");
    switch (inputArr[0]) {
      case "push":
        answer.push(Number(inputArr[1]));
        break;
      case "pop":
        if (front < answer.length) {
          console.log(answer[front]);
          front++;
        } else {
          console.log(-1);
        }
        break;
      case "size":
        console.log(answer.length - front);
        break;
      case "empty":
        console.log(front < answer.length ? 0 : 1);
        break;
      case "front":
        console.log(front < answer.length ? answer[front] : -1);
        break;
      case "back":
        console.log(front < answer.length ? answer[answer.length - 1] : -1);
        break;
    }
  }
}
solution(input);
