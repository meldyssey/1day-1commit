const fs = require("fs");
const path = require("path");
const topFolder = path.basename(__dirname);
const filePath =
    process.platform === "linux"
        ? "dev/stdin"
        : path.join(topFolder, "input.txt");
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

// console.log(n);
// console.log(input);

solution(input);

function solution(input) {
    let result = 0;
    // input 가공, 소배열 : 위치

    let inputLine = input.map((v) => v.trim().split(" "));
    let inputLocation = {};
    // console.log(inputLine);
    for (i = 0; i < inputLine.length; i++) {
        if (
            inputLine[i][0] in inputLocation &&
            inputLocation[inputLine[i][0]] == inputLine[i][1]
        ) {
            continue;
        } else if (
            inputLine[i][0] in inputLocation &&
            inputLocation[inputLine[i][0]] != inputLine[i][1]
        ) {
            inputLocation[inputLine[i][0]] = inputLine[i][1];
            result++;
        } else {
            inputLocation[inputLine[i][0]] = inputLine[i][1];
        }
    }
    // console.log(inputLocation);

    return console.log(result);
}
