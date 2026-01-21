const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim();

function solution(isbn) {
  const starIndex = isbn.indexOf("*");

  let sum = 0;

  for (let i = 0; i < 13; i++) {
    if (i === starIndex) continue;

    const digit = +isbn[i];
    const weight = i % 2 ? 3 : 1;
    sum += digit * weight;
  }

  const starWeight = starIndex % 2 ? 3 : 1;

  for (let digit = 0; digit <= 9; digit++) {
    const totalSum = sum + digit * starWeight;
    if (totalSum % 10 === 0) {
      return digit;
    }
  }
}
console.log(solution(input));
