const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `/dev/stdin` : `${currentDir}/input.txt`;
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const inputLine = input.map((v) => v.split(" "));
let stack = [];
let result = [];

function solution(input) {
  switch (input[0]) {
    case "push":
      stack.push(+input[1]);
      break;
    case "pop":
      let popNum = +stack.pop();
      result.push(popNum || -1);
      break;
    case "size":
      result.push(stack.length);
      break;
    case "empty":
      result.push(stack[0] ? 0 : 1);
      break;
    case "top":
      result.push(+stack[stack.length - 1] || -1);
      break;
  }
}
for (v of inputLine) {
  solution(v);
}

console.log(result.join("\n"));
