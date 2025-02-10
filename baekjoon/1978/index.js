const fs = require("fs");
const path = require("path");
const topFolder = path.basename(__dirname);
const filePath =
    process.platform === "linux"
        ? "dev/stdin"
        : path.join(topFolder, "input.txt");
const [n, input] = fs.readFileSync(filePath).toString().trim().split("\n");
inputLine = input.split(" ");
// console.log(n);

// console.log(inputLine);

let result = [];

for (let v of inputLine) {
    let zeroCount = 0;
    for (let i = 1; i <= v; i++) {
        if (!(v % i)) {
            zeroCount++;
            // console.log(zeroCount);
        }
    }
    if (zeroCount == 2) {
        result.push(v);
    }
}
console.log(result.length);
