const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "1001/input.txt";
const input = fs.readFileSync(filePath).toString().split(" ");

function solution(input) {
    let answer = Number(input[0]) - Number(input[1]);

    console.log(answer);
}

solution(input);
