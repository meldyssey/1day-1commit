const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath = process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  let [N, M] = input[0].split(" ").map(v => Number(v));
  let card = input[1].split(" ").map(v => Number(v)).sort((a, b)=> b - a)
  let cardSum = [] 
  for(let i=0; i<card.length; i++){
    for(let j=i+1; j<card.length; j++){
      for(let k=j+1; k<card.length; k++){
        let sum = card[i] + card[j] + card[k];
        if(sum <= M){
          cardSum.push(sum)
        }
      }
    }
  }
  cardMax = Math.max(...cardSum)
  console.log(cardMax);
}
solution(input);