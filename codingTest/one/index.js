const fs = require("fs");
const [num, ...input] = fs
    .readFileSync("one/input.txt")
    .toString()
    .trim()
    .split("\n");

const goal = [input[0], input[1], input[2]];

console.log(goal);
