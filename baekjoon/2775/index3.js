const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `/dev/stdin` : `${currentDir}/input.txt`;
const [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

/*
0층 = [0, 1, 2, 3, 4]
1층 = [0, 1, 3, 6, 10]
2층 = [0, 1, 4, 10, 20]
*/

function solution(input) {
  console.log(input);
  let answer = []; // 모든 테스트케이스의 결과를 저장할 배열

  for (let i = 0; i < +t; i++) {
    const findFloor = +input[i * 2]; // 층수
    console.log(findFloor);
    const findRoomNum = +input[i * 2 + 1]; // 호수
    console.log(findRoomNum);
    let curFloor = Array.from({ length: findRoomNum + 1 }, (_, idx) => idx); // 0층
    for (let floor = 1; floor <= findFloor; floor++) {
      for (let room = 1; room <= findRoomNum; room++) {
        curFloor[room] = curFloor[room] + curFloor[room - 1];
      }
      console.log(curFloor);
    }
    answer.push(curFloor[findRoomNum]);
  }

  answer.forEach((result) => console.log(result));
}
solution(input);
