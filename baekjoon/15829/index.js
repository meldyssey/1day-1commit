const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const str = input[0];
  let answer = 0;
  let power = 1; // 31^0 = 1부터 시작
  const MOD = 1234567891;

  for (let i = 0; i < str.length; i++) {
    const charValue = str.charCodeAt(i) - 96; // 'a'=1, 'b'=2, ...
    answer = (answer + charValue * power) % MOD;
    power = (power * 31) % MOD; // 다음 거듭제곱을 미리 계산하면서 모듈러 적용
  }

  console.log(answer);
}
solution(input);
