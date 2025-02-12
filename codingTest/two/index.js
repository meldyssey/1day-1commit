const fs = require("fs");
const [num, ...input] = fs
    .readFileSync("two/input.txt")
    .toString()
    .trim()
    .split("\n");
const inputLine = input.map((v) => v.split(" ").map(Number));
console.log(inputLine);

let resultArr = Array.from({ length: num[0] }, (v, i) => i + 1);
console.log(resultArr);

for (let i = 0; i < resultArr.length - 1; i++) {
    let pairs = [];
    for (let j = i + 1; j < resultArr.length; j++) {
        pairs.push([resultArr[i], resultArr[j]]);
    }
    console.log(pairs);
    let toRemove = new Set();
    for (let pair of pairs) {
        for (let k of inputLine) {
            if (pair[0] === k[0] && pair[1] === k[1]) {
                toRemove.add(pair[1]);
            }
        }
    }

    resultArr = resultArr.filter((v) => !toRemove.has(v));
    console.log(toRemove);
}
console.log(resultArr);

console.log(resultArr.length);
