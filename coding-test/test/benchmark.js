// benchmark.js 파일 생성
function precisionBenchmark() {
  const testStrings = ["123", "45.67", "999", "0", "12345"];
  const iterations = 1000000;
  const methods = {
    plus: (str) => +str,
    Number: (str) => Number(str),
    parseInt: (str) => parseInt(str),
    parseFloat: (str) => parseFloat(str),
    multiply: (str) => str * 1,
  };

  console.log("=== 정밀 성능 측정 ===");
  console.log(`테스트 횟수: ${iterations.toLocaleString()}회\n`);

  const results = {};

  for (let [name, method] of Object.entries(methods)) {
    // 워밍업 (JIT 최적화를 위해)
    for (let i = 0; i < 10000; i++) {
      for (let str of testStrings) {
        method(str);
      }
    }

    // 실제 측정
    const start = process.hrtime.bigint();
    for (let i = 0; i < iterations; i++) {
      for (let str of testStrings) {
        method(str);
      }
    }
    const end = process.hrtime.bigint();

    const timeMs = Number(end - start) / 1000000;
    results[name] = timeMs;
    console.log(`${name}: ${timeMs.toFixed(2)}ms`);
  }

  // 상대적 성능 비교
  console.log("\n=== 상대적 성능 (가장 빠른 것 기준) ===");
  const fastest = Math.min(...Object.values(results));
  for (let [name, time] of Object.entries(results)) {
    const ratio = (time / fastest).toFixed(2);
    console.log(`${name}: ${ratio}x`);
  }
}

precisionBenchmark();

function memoryBenchmark() {
  const iterations = 100000;
  const testString = "12345";

  // 가비지 컬렉션 강제 실행 (Node.js)
  if (global.gc) {
    global.gc();
  }

  const beforeMemory = process.memoryUsage();

  console.time("메모리 테스트");
  const results = [];
  for (let i = 0; i < iterations; i++) {
    results.push(+testString);
  }
  console.timeEnd("메모리 테스트");

  const afterMemory = process.memoryUsage();

  console.log("메모리 사용량 변화:");
  console.log(
    `Heap Used: ${(
      (afterMemory.heapUsed - beforeMemory.heapUsed) /
      1024 /
      1024
    ).toFixed(2)}MB`
  );

  // 결과 사용해서 최적화 방지
  console.log(`결과 개수: ${results.length}`);
}

memoryBenchmark();

// Node.js에서 --expose-gc 옵션으로 실행
// node --expose-gc benchmark.js
