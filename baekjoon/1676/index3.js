const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const n = +input;
  let count = 0;

  // 5의 배수들에서 5의 개수를 센다
  for (let i = 5; i <= n; i *= 5) {
    count += Math.floor(n / i);
  }

  console.log(count);
}

solution(input);

/*
원리 설명

1. 5의 배수 개수 세기
- `n! = 1 × 2 × 3 × ... × n`에서
- 5, 10, 15, 20, 25, ... 같은 5의 배수들이 5라는 소인수를 제공
- `Math.floor(n / 5)`로 5의 배수 개수를 구함

2. 25, 125 등의 처리
- 25 = 5², 125 = 5³이므로 추가로 5를 더 제공
- `Math.floor(n / 25)`, `Math.floor(n / 125)` 등을 더해줌

예시: n = 25일 때
```
5의 배수: 5, 10, 15, 20, 25 → 5개
25의 배수: 25 → 1개 (추가)
총 5의 개수: 5 + 1 = 6개
*/
