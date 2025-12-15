const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  input.sort((a, b) => {
    const aX = Number(a.split(" ")[0]);
    const aY = Number(a.split(" ")[1]);
    const bX = Number(b.split(" ")[0]);
    const bY = Number(b.split(" ")[1]);
    if (aX !== bX) {
      return aX - bX;
    }
    return aY - bY;
  });
  console.log(input.join("\n"));
}
solution(input);
