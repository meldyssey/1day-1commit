const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  let answer = 0;
  let numIdx = 0;
  let nextNum = 0;
  for (let i = 0; i < input.length; i++) {
    if (!isNaN(+input[i])) {
      numIdx = i;
    }
  }
  switch (numIdx) {
    case 0:
      nextNum = +input[numIdx] + 3;
      break;
    case 1:
      nextNum = +input[numIdx] + 2;
      break;
    case 2:
      nextNum = +input[numIdx] + 1;
      break;
  }

  // console.log(nextNum);
  if (nextNum % 3 === 0 && nextNum % 5 === 0) {
    console.log("FizzBuzz");
  } else if (nextNum % 3 === 0) {
    console.log("Fizz");
  } else if (nextNum % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(nextNum);
  }
}
solution(input);
