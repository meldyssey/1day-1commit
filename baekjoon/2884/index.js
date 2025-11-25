const fs = require("fs");
const filePath = process.platform === "linux" ? 0 : "2884/input.txt";
const input = fs.readFileSync(filePath, 'utf-8').toString().trim().split(" ");

function solution(input) {
  let hour = Number(input[0]);
  let min = Number(input[1]);
    
  if(min >= 45) {
    min = min - 45;
  } else {
    if(hour === 0) {
      hour = 23;
      min = 60 - (45 - min);
    } else {
      hour = hour - 1;
      min = 60 - (45 - min);
    }
  }  
  console.log(hour + " " + min);
}

solution(input);