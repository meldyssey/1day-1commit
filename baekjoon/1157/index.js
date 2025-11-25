const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "1157/input.txt";
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
    let arrayInput = input.toUpperCase().split("")
    // console.log(arrayInput)
    let cntObj = {}
    for(let i=0; i<arrayInput.length; i++){
        if(arrayInput[i] in cntObj){
            cntObj[arrayInput[i]] ++
        } else{
            cntObj[arrayInput[i]] = 1
        }
    }

    // Object.values()는 배열이라 스프레드 연산자로 배열을 펼쳐서 개별 인자로 만들어야 함
    let maxCnt = Math.max(...Object.values(cntObj))
    let maxChar = []
    for (let char in cntObj){
        if(cntObj[char] === maxCnt){
            maxChar.push(char)
        }
    }

    if(maxChar.length > 1){
        console.log("?");
    } else {
        console.log(maxChar[0]);
    }
}

solution(input);
