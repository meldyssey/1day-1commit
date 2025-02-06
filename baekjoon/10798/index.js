const fs = require("fs");
const path = require("path");
const topFolder = path.basename(__dirname);
const filePath =
    process.platform === "linux"
        ? "dev/stdin"
        : path.join(topFolder, "input.txt");
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let answer = solution(input);
console.log(answer);

function solution(input) {
    result = "";
    // console.log(input);
    maxLength = Math.max(...input.map((v) => v.length));
    console.log(maxLength);
    for (let i = 0; i < maxLength; i++)
        for (let j = 0; j < input.length; j++) {
            if (input[j][i]) {
                result += input[j][i];
            } else {
                ("");
            }
        }
    return result;
}
