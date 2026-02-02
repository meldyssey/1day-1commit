const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const people = input.map((v) => v.split(" ").map(Number));
  let answer = new Array(people.length).fill(1);
  for (let i = 0; i < people.length; i++) {
    for (let j = 0; j < people.length; j++) {
      if (i !== j) {
        if (people[j][0] > people[i][0] && people[j][1] > people[i][1]) {
          answer[i]++;
        }
      }
    }
  }
  console.log(answer.join(" "));
}
solution(input);
