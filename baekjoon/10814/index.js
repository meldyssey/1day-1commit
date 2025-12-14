const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  input.sort((a, b) => {
    const ageA = Number(a.split(" ")[0]);
    const ageB = Number(b.split(" ")[0]);
    if (ageA !== ageB) {
      return ageA - ageB;
    }
    return 0;
  });
  console.log(input.join("\n"));
}
solution(input);
