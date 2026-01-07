const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const [nm, num, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

function solution(input) {
  const [n, m] = nm.split(" ").map(Number);
  const arrayNum = num.split(" ").map(Number);

  // 누적 합 배열 생성
  const prefixSum = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    prefixSum[i] = prefixSum[i - 1] + arrayNum[i - 1];
  }

  // 각 쿼리 처리
  for (let k = 0; k < input.length; k++) {
    const [i, j] = input[k].split(" ").map(Number);
    // 구간 합: prefixSum[j] - prefixSum[i-1]
    const answer = prefixSum[j] - prefixSum[i - 1];
    console.log(answer);
  }
}

solution(input);

/*
```

**핵심 아이디어:**
1. **누적 합 배열 생성**: `prefixSum[i] = arr[0] + arr[1] + ... + arr[i-1]`
2. **구간 합 계산**: `sum(i, j) = prefixSum[j] - prefixSum[i-1]`

**시간복잡도:**
- 누적 합 계산: O(N)
- 각 쿼리 처리: O(1)
- 전체: O(N + M)

**예시:**
```
배열: [5, 4, 3, 2, 1]
누적합: [0, 5, 9, 12, 14, 15]

구간 [2, 4] 합을 구하려면:
prefixSum[4] - prefixSum[1] = 14 - 5 = 9 (4 + 3 + 2)

*/
