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

//DFS(깊이 우선 탐색)
function solution(input) {
  const computerCount = parseInt(n);
  const connectionCount = parseInt(connect);

  // 인접 리스트로 그래프 구성
  const graph = Array.from({ length: computerCount + 1 }, () => []);

  // 연결 정보 입력
  for (let i = 0; i < connectionCount; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    graph[a].push(b);
    graph[b].push(a);
  }

  const visited = new Array(computerCount + 1).fill(false);
  let answer = 0;

  function dfs(node) {
    visited[node] = true;

    for (const neighbor of graph[node]) {
      if (!visited[neighbor]) {
        answer++;
        dfs(neighbor);
      }
    }
  }

  dfs(1); // 1번 컴퓨터에서 시작
  console.log(answer);
}
solution(input);

// **같은 예시로 분석해보겠습니다:**
// 그래프: 1-2-3, 1-5-6, 5-2, 4-7 (분리됨)
// graph[1] = [2, 5]
// graph[2] = [1, 3, 5]
// graph[3] = [2]
// graph[5] = [1, 2, 6]
// graph[6] = [5]
