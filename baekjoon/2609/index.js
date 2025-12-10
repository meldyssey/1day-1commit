const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath = process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split(' ');

function solution(input) {
  let [num1, num2] = input.map(Number);
  let gcd = 1
  for(let i=2; i<=Math.min(...input); i++){
    if(num1 % i === 0 && num2 % i ===0){
      gcd = i
    }
  }

  let lcm = 1;
  while(true){
    if(lcm % num1 === 0 && lcm % num2 === 0 ) break;
    lcm ++
  }
  console.log(gcd);
  console.log(lcm);
}
solution(input);

//유클리드 호제법
function solution2(input) {
  let [num1, num2] = input.map(Number);
  const oriNum1 = num1
  const oriNum2 = num2
  let gcd = 1
  while(num2>0){
    let r = num1 % num2;
    num1 = num2;
    num2 = r;
    gcd = num1
  }

  let lcm = (oriNum1 * oriNum2) / gcd;

  console.log(gcd);
  console.log(lcm);
}
solution2(input);
