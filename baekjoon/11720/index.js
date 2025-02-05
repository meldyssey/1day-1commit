const fs = require("fs");
const path = require("path");
const topFolder = path.basename(__dirname);
const filePath =
    process.platform === "linux"
        ? "dev/stdin"
        : path.join(topFolder, "input.txt");
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let count = Number(input[0]);
const inputLine = [count];
for (let i = 1; i < input.length; i++) {
    inputLine.push(
        input[i]
            .toString()
            .trim()
            .split("")
            .map((v) => Number(v))
    );
}

// console.log(filePath);
// console.log(topFolder);
// console.log(inputLine);

function solution(input) {
    answer = 0;
    for (i = 0; i < input.length; i++) {
        answer += Number(input[i]);
    }
    console.log(answer);
}

solution(input[1]);
