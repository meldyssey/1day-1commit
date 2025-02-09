const fs = require("fs");
const path = require("path");
const topFolder = path.basename(__dirname);
const filePath =
    process.platform === "linux"
        ? "dev/stdin"
        : path.join(topFolder, "input.txt");
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

// console.log(input);
const inputLine = input.map((v) => v.split(" "));
// console.log(inputLine);

let stack = [];
let result = [];
function solution(input) {
    switch (input[0]) {
        case "push":
            stack.push(input[1]);
            break;
        case "pop":
            let delValue = stack.pop();
            result.push(delValue || -1);
            break;
        case "size":
            result.push(stack.length);
            break;
        case "empty":
            result.push(stack[0] ? 0 : 1);
            break;
        case "top":
            result.push(stack[stack.length - 1] || -1);
            break;
    }
}

for (v of inputLine) {
    solution(v);
}

console.log(result.join("\n"));
