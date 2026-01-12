function delay(ms) {
  console.log("delay 함수 실행 - Promise 생성");

  return new Promise((resolve) => {
    console.log("setTimeout 등록 - 백그라운드에서 타이머 시작");

    setTimeout(() => {
      console.log("타이머 완료 - resolve 호출!");
      resolve("");
    }, ms);

    console.log("Promise 반환 완료");
  });
}

async function test() {
  console.log("1. 시작");
  console.log("2. delay 호출");
  await delay(1000);
  console.log("3. delay 완료 후");
}

console.log("A. 스크립트 시작");
test(); // 함수 호출!
console.log("B. test 함수 호출 완료");

/* 결과
A. 스크립트 시작
1. 시작
2. delay 호출
delay 함수 실행 - Promise 생성
setTimeout 등록 - 백그라운드에서 타이머 시작
Promise 반환 완료
B. test 함수 호출 완료
타이머 완료 - resolve 호출!
3. delay 완료 후
*/
