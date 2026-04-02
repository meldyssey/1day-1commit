const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `/dev/stdin` : `${currentDir}/input.txt`;
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  let stack = [];
  let answer = [];
  for (let i = 0; i < input.length; i++) {
    const command = input[i].split(" ")[0];
    const num = input[i].split(" ")[1] || 0;
    switch (command) {
      case "push":
        stack.push(num);
        continue;
      case "pop":
        answer.push(stack.pop() || -1);
        continue;
      case "size":
        answer.push(stack.length);
        continue;
      case "empty":
        answer.push(stack.length ? 0 : 1);
        continue;
      case "top":
        answer.push(stack[stack.length - 1] || -1);
        continue;
    }
  }
  console.log(answer.join("\n"));
}
solution(input);
