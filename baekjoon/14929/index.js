const fs = require("fs");
const path = require("path");
const topFolder = path.basename(__dirname);
const filePath =
    process.platform === "linux"
        ? "dev/stdin"
        : path.join(topFolder, "input.txt");
const [n, input] = fs.readFileSync(filePath).toString().trim().split("\n");
const inputLine = input.split(" ").map((v) => Number(v));
// console.log(inputLine);

let result = 0;
for (let i = 0; i < n; i++) {
    // console.log(inputLine[i]);
    // console.log(inputLine[i + 1]);
    for (let j = i + 1; j < n; j++) {
        let calc = inputLine[i] * inputLine[j];
        // console.log(calc);

        result += calc;
    }
}

console.log(result);