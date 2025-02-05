const fs = require("fs");
const path = require("path");
const topFolder = path.basename(__dirname);
const filePath =
    process.platform === "linux"
        ? "dev/stdin"
        : path.join(topFolder, "input.txt");
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, ...inputs] = input.map((v) => v.trim());

let answer = solution(n, inputs);
console.log(answer);

function solution(n, inputs) {
    const result = [];
    let inputLine = new Array();
    for (i = 0; i < inputs.length; i++) {
        inputLine.push(
            inputs[i]
                .trim()
                .split("")
                .map((v) => {
                    if (v === " ") return null;
                    return v;
                })
        );
    }
    // let inputCount = [];

    for (i = 0; i < inputLine.length; i++) {
        let count = {};
        for (const oo of inputLine[i]) {
            if (oo in count) {
                count[oo]++;
            } else if (oo === null) {
                continue;
            } else {
                count[oo] = 1;
            }
        }
        // inputCount.push(count);
        let maxCount = Math.max(...Object.values(count));
        let alphabet = Object.keys(count).filter((key) => {
            return count[key] === maxCount;
        });
        // console.log(alphabet);
        result.push(alphabet.length > 1 ? "?" : alphabet[0]);
    }
    // console.log(inputCount);
    return result.join("\n");
}
