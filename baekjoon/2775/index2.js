const fs = require("fs");
const path = require("path");
const currentDir = path.basename(__dirname);
const filePath =
  process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const [t, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

function solution(input) {
  const results = []; // 모든 테스트케이스의 결과를 저장할 배열

  // 각 테스트케이스를 순차적으로 처리
  for (let i = 0; i < t; i++) {
    const k = input[i * 2]; // 찾고자 하는 층수 (k층)
    const n = input[i * 2 + 1]; // 찾고자 하는 호수 (n호)

    // 핵심 최적화: 2차원 배열 대신 1차원 배열 사용
    // current[j] = 현재 계산 중인 층의 j호에 사는 사람 수
    // 초기값: 0층의 상태 [0, 1, 2, 3, ..., n] (0번 인덱스는 사용하지 않음)
    let current = Array.from({ length: n + 1 }, (_, idx) => idx);

    // 예시: n=3일 때 current = [0, 1, 2, 3]
    // 0층: 1호=1명, 2호=2명, 3호=3명

    // 1층부터 k층까지 순차적으로 계산
    for (let floor = 1; floor <= k; floor++) {
      // 현재 층의 각 호수별 거주자 수 계산
      for (let room = 1; room <= n; room++) {
        // 핵심 점화식: current[room] += current[room - 1]
        //
        // 이 공식이 왜 동작하는지 단계별 설명:
        // 1. current[room-1]은 이미 "현재 층의 1호~(room-1)호 합"을 담고 있음
        // 2. current[room]은 "이전 층의 room호" 값을 담고 있음
        // 3. 둘을 더하면 "현재 층의 1호~room호 합" = "현재 층 room호의 거주자 수"
        current[room] += current[room - 1];

        // 예시 실행 과정 (k=1, n=3인 경우):
        // 0층 초기상태: current = [0, 1, 2, 3]
        //
        // 1층 계산:
        // room=1: current[1] += current[0] → 1 += 0 = 1
        // room=2: current[2] += current[1] → 2 += 1 = 3
        // room=3: current[3] += current[2] → 3 += 3 = 6
        //
        // 1층 최종상태: current = [0, 1, 3, 6]
        // 즉, 1층 1호=1명, 1층 2호=3명, 1층 3호=6명
      }
    }

    // k층 n호의 거주자 수를 결과 배열에 추가
    results.push(current[n]);
  }

  // 모든 결과를 한 줄씩 출력
  results.forEach((result) => console.log(result));
}

solution(input);
// 0층 1, 2, 3, 4, ..., 14
// 1층
// apt[1][0] = apt[0][0],
// apt[1][1] = apt[0][0] + apt[0][1],
// apt[1][2] = apt[0][0] + apt[0][1] + apt[0][2]
//           = apt[1][1] + apt[0][2](이전 층의 해당 호수)
// 2층 1, 1+1+2, 1+1+2+1+2+3
