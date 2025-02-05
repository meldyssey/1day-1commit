const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "10998/input.txt";
const input = fs.readFileSync(filePath).toString().split(" ");

console.log(input);

function solution(input) {
    let answer = parseInt(input[0]) * parseInt(input[1]);
    console.log(answer);
}

solution(input);
