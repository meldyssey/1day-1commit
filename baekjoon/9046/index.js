const fs = require("fs");
const path = require("path");
const topFolder = path.basename(__dirname);
const filePath =
    process.platform === "linux"
        ? "dev/stdin"
        : path.join(topFolder, "input.txt");
const input = fs.readFileSync(filePath).toString().trim().split("\n");
// console.log(input);

const inputLine = new Array();
for (i = 0; i < input.length; i++) {
    inputLine.push(
        input[i]
            .trim()
            .split("")
            .map((v) => {
                if (v === " ") return null;
                return v;
            })
    );
}
console.log(inputLine);

function solution(input){
    
}
