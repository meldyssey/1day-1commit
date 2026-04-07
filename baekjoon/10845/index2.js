const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `/dev/stdin` : `${currentDir}/input.txt`;
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  let que = [];
  let answer = [];
  for (let i = 0; i < input.length; i++) {
    const curCommand = input[i].split(" ");
    const command = curCommand[0];
    const num = +curCommand[1] || 0;
    // console.log(command, num);
    switch (command) {
      case "push":
        que.push(num);
        break;
      case "pop":
        answer.push(que.shift() || -1);
        break;
      case "size":
        answer.push(que.length);
        break;
      case "empty":
        answer.push(que.length ? 0 : 1);
        break;
      case "front":
        answer.push(que[0] || -1);
        break;
      case "back":
        answer.push(que[que.length - 1] || -1);
        break;
    }
  }

  console.log(answer.join("\n"));
}
solution(input);
