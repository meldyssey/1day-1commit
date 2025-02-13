const fs = require("fs");
const path = require("path");
const topFolder = path.basename(__dirname);
const filePath =
    process.platform === "linux"
        ? "dev/stdin"
        : path.join(topFolder, "input.txt");
const [num, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
console.log(input);
const numLine = num.split(" ");
const inputLine = input.map((v) => v.trim().split(" "));

console.log(numLine);
console.log(inputLine);

const result = new Set();
