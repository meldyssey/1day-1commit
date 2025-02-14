const fs = require("fs");
const path = require("path");
const topFolder = path.basename(__dirname);
const filePath =
    process.platform === "linux"
        ? "dev/stdin"
        : path.join(topFolder, "input.txt");
const [n, relation, m, ...input] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const relationLine = relation.split(" ");
console.log(relationLine);
console.log(input);
