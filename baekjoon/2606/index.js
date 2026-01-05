const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const [n, connect, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

//BFS(너비 우선 탐색)
function solution(input) {
  const computerCnt = +n;
  const connectionCnt = +connect;

  const graph = Array.from({ length: computerCnt + 1 }, () => []);

  for (let i = 0; i < connectionCnt; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    graph[a].push(b);
    graph[b].push(a);
  }

  const visited = new Array(computerCnt + 1).fill(false);
  const queue = [1];
  visited[1] = true;
  let answer = 0;

  while (queue.length > 0) {
    const current = queue.shift();

    for (const neighbor of graph[current]) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push(neighbor);
        answer++;
      }
    }
  }
  console.log(answer);
}
solution(input);
