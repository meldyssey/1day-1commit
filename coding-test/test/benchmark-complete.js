// benchmark-complete.js
async function completeBenchmark() {
  const testStrings = ["123", "45.67", "999", "0", "12345"];
  const iterations = 500000; // 메모리 측정을 위해 조금 줄임
  const methods = {
    plus: (str) => +str,
    Number: (str) => Number(str),
    parseInt: (str) => parseInt(str),
    parseFloat: (str) => parseFloat(str),
    multiply: (str) => str * 1,
  };

  console.log("=== 완전한 성능 + 메모리 측정 ===");
  console.log(`테스트 횟수: ${iterations.toLocaleString()}회`);
  console.log(
    `문자열당 ${testStrings.length}개씩 총 ${(
      iterations * testStrings.length
    ).toLocaleString()}회 변환\n`
  );

  const results = {};

  for (let [name, method] of Object.entries(methods)) {
    console.log(`🔍 ${name} 테스트 중...`);

    // 가비지 컬렉션 강제 실행
    if (global.gc) {
      global.gc();
    }

    // 워밍업 (JIT 최적화를 위해)
    for (let i = 0; i < 10000; i++) {
      for (let str of testStrings) {
        method(str);
      }
    }

    // 측정 전 가비지 컬렉션
    if (global.gc) {
      global.gc();
      // 안정화를 위해 잠깐 대기
      await new Promise((resolve) => setTimeout(resolve, 100));
    }

    const memBefore = process.memoryUsage();

    // 성능 측정 시작
    const start = process.hrtime.bigint();

    // 실제 테스트 실행
    const testResults = [];
    for (let i = 0; i < iterations; i++) {
      for (let str of testStrings) {
        testResults.push(method(str));
      }
    }

    // 성능 측정 끝
    const end = process.hrtime.bigint();

    // 메모리 측정 끝
    const memAfter = process.memoryUsage();

    const timeMs = Number(end - start) / 1000000;
    const memoryUsed = memAfter.heapUsed - memBefore.heapUsed;

    results[name] = {
      time: timeMs,
      memory: memoryUsed,
      resultCount: testResults.length,
      throughput: (testResults.length / timeMs) * 1000, // 초당 처리량
    };

    console.log(`  ✅ 시간: ${timeMs.toFixed(2)}ms`);
    console.log(`  💾 메모리: ${(memoryUsed / 1024 / 1024).toFixed(2)}MB`);
    console.log(
      `  ⚡ 처리량: ${Math.round(
        results[name].throughput
      ).toLocaleString()}/sec`
    );
    console.log(`  📊 결과 개수: ${testResults.length.toLocaleString()}개\n`);

    // 메모리 해제
    testResults.length = 0;
  }

  // 상대적 성능 비교
  console.log("=== 📈 상대적 성능 비교 ===");
  const fastest = Math.min(...Object.values(results).map((r) => r.time));
  const leastMemory = Math.min(...Object.values(results).map((r) => r.memory));

  console.log("시간 기준 (가장 빠른 것 = 1.00x):");
  for (let [name, result] of Object.entries(results)) {
    const ratio = (result.time / fastest).toFixed(2);
    const indicator = ratio === "1.00" ? "🏆" : ratio < "1.50" ? "🥈" : "🥉";
    console.log(`  ${indicator} ${name}: ${ratio}x`);
  }

  console.log("\n메모리 기준 (가장 적게 사용 = 1.00x):");
  for (let [name, result] of Object.entries(results)) {
    const ratio =
      result.memory <= 0
        ? "0.00"
        : (result.memory / Math.max(leastMemory, 1)).toFixed(2);
    const indicator =
      ratio === "1.00" || ratio === "0.00"
        ? "🏆"
        : ratio < "2.00"
        ? "🥈"
        : "🥉";
    console.log(
      `  ${indicator} ${name}: ${ratio}x (${(
        result.memory /
        1024 /
        1024
      ).toFixed(2)}MB)`
    );
  }

  // 종합 추천
  console.log("\n=== 🎯 종합 결과 ===");
  const sorted = Object.entries(results)
    .map(([name, result]) => ({
      name,
      score:
        result.time / fastest +
        (Math.max(result.memory, 0) / Math.max(leastMemory, 1000000)) * 0.3,
    }))
    .sort((a, b) => a.score - b.score);

  console.log("종합 순위 (성능 70% + 메모리 30%):");
  sorted.forEach((item, index) => {
    const medal =
      index === 0 ? "🏆" : index === 1 ? "🥈" : index === 2 ? "🥉" : "📍";
    console.log(`  ${medal} ${index + 1}등: ${item.name}`);
  });

  console.log(`\n✨ 코딩테스트 추천: ${sorted[0].name} 연산자`);
}

// 코딩테스트 시나리오 테스트
async function codingTestScenario() {
  console.log("\n" + "=".repeat(50));
  console.log("=== 🚀 실제 코딩테스트 시나리오 ===");
  console.log("=".repeat(50));

  // 대용량 입력 시뮬레이션
  const sizes = [1000, 10000, 100000];

  for (let size of sizes) {
    console.log(`\n📊 입력 크기: ${size.toLocaleString()}개 숫자`);
    const largeInput = Array.from({ length: size }, (_, i) => i % 1000).join(
      " "
    );

    const methods = [
      { name: "+ 연산자", fn: (input) => input.split(" ").map((x) => +x) },
      {
        name: "Number()",
        fn: (input) => input.split(" ").map((x) => Number(x)),
      },
      {
        name: "parseInt()",
        fn: (input) => input.split(" ").map((x) => parseInt(x)),
      },
    ];

    for (let method of methods) {
      if (global.gc) global.gc();

      const memBefore = process.memoryUsage();
      const start = process.hrtime.bigint();

      const result = method.fn(largeInput);

      const end = process.hrtime.bigint();
      const memAfter = process.memoryUsage();

      const timeMs = Number(end - start) / 1000000;
      const memoryMB = (memAfter.heapUsed - memBefore.heapUsed) / 1024 / 1024;

      console.log(
        `  ${method.name}: ${timeMs.toFixed(1)}ms, ${memoryMB.toFixed(1)}MB`
      );

      // 결과 검증
      if (result.length !== size) {
        console.log(`  ⚠️  결과 길이 불일치: ${result.length}`);
      }
    }
  }
}

// 메인 실행 함수
async function main() {
  console.log("🔬 JavaScript 숫자 변환 성능 벤치마크");
  console.log("==========================================");

  // 가비지 컬렉션 사용 가능 여부 확인
  if (!global.gc) {
    console.log(
      "⚠️  더 정확한 메모리 측정을 위해 --expose-gc 옵션을 사용하세요"
    );
    console.log("   실행 방법: node --expose-gc benchmark-complete.js\n");
  } else {
    console.log("✅ 가비지 컬렉션 활성화됨 - 정확한 메모리 측정 가능\n");
  }

  try {
    // 기본 성능 테스트
    await completeBenchmark();

    // 코딩테스트 시나리오
    await codingTestScenario();

    console.log("\n🎉 벤치마크 완료!");
    console.log(
      "\n💡 팁: 코딩테스트에서는 대부분 + 연산자나 Number()를 사용하세요!"
    );
  } catch (error) {
    console.error("❌ 오류 발생:", error.message);
  }
}

// Promise를 지원하는 setTimeout
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// 실행
main().catch(console.error);
