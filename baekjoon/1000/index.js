const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "1000/input.txt";
const input = fs.readFileSync(filePath).toString().split(" ");

// console.log(filePath);
// console.log(input);

function solution(input) {
    answer = 0;
    for (i = 0; i < input.length; i++) {
        answer += Number(input[i]);
    }
    console.log(answer);
}

solution(input);
