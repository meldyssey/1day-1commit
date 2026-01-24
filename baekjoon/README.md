📖 백준 문제풀기

아래 node.js로 문제풀 때, 코드 스니펫 만들어서 풀면 편해요!

```

const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
// 실제 자신이 사용하고 있는 input.txt 파일경로로 ":" 뒷부분 수정 필요 (앞 부분은 백준에서 실행시 경로로 그대로 놔두기)
const filePath = process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split(' ');

// 아래 함수 안에 풀이 작성
function solution(input) {
  let answer = 0;
  console.log(answer);
}
solution(input);
```
