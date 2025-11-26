const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath = process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split(' ');

function solution(input) {
    let [ A, B ] = input;
    if(Number(A) > Number(B)) console.log('>')
    if(Number(A) < Number(B)) console.log('<')
    if(Number(A) === Number(B)) console.log('==')
}
solution(input);