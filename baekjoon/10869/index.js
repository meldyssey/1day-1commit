const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath = process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split(' ');

function solution(input) {
    const [A, B] = input
    console.log(Number(A)+Number(B));
    console.log(Number(A)-Number(B));
    console.log(Number(A)*Number(B));
    console.log(Math.floor(Number(A)/Number(B)));
    console.log(Number(A)%Number(B));
}
solution(input);