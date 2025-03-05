const fs = require("fs");
const path = require("path");
const topFolder = path.basename(__dirname);
const filePath =
    process.platform === "linux"
        ? "dev/stdin"
        : path.join(topFolder, "input.txt");
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const inputNum = input.map((v) => Number(v));

function solution(input) {
    let x = 0;
    let y = 0;

    x =
        (input[2] * input[4] - input[1] * input[5]) /
        (input[0] * input[4] - input[1] * input[3]);
    y =
        (input[2] * input[3] - input[0] * input[5]) /
        (input[1] * input[3] - input[0] * input[4]);

    console.log(`${x} ${y}`);
}

solution(inputNum);
