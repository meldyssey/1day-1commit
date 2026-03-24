const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `/dev/stdin` : `${currentDir}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  // console.log(input);
  const inputArr = input.map(Number);
  // console.log(inputArr);
  let numIdx = inputArr.findIndex((v) => !isNaN(v));
  // console.log(numIdx);
  let findNum = inputArr[numIdx];
  let answer = "";

  while (numIdx < 3) {
    findNum++;
    numIdx++;
  }
  if (findNum % 3 && findNum % 5) {
    answer = findNum;
  } else if (findNum % 3 && !(findNum % 5)) {
    answer = "Buzz";
  } else if (!(findNum % 3) && findNum % 5) {
    answer = "Fizz";
  } else {
    answer = "FizzBuzz";
  }
  console.log(answer);
}
solution(input);
