const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `/dev/stdin` : `${currentDir}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim();

/*
문제 풀이
1층 - 1
2층 - 6
3층 - 12
4층 - 18
6*(floor-1) = 방 개수
 */

function solution(input) {
  let roomNum = +input;
  let floor = 1;
  let floorLastRoom = 1;
  // 경계값 조심하기
  while (floorLastRoom < roomNum) {
    floor++;
    floorLastRoom += 6 * (floor - 1);
  }

  console.log(floor);
}
solution(input);
