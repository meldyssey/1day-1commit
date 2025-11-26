const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "1008/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

function solution(input) {
    const [A, B] = input;
    console.log(A/B);
}

solution(input);