function createPromise() {
  return new Promise((resolve) => {
    console.log("Promise 생성됨 - 상태: pending");

    setTimeout(() => {
      console.log("콜백 실행 - resolve 호출 전");
      resolve("데이터"); // Promise 상태를 fulfilled로 변경
      console.log("resolve 호출 완료 - 상태: fulfilled");
    }, 3000);

    console.log("Promise 반환 완료");
  });
}

const promise = createPromise();
console.log("생성된 Promise:", promise); // Promise { <pending> }

promise.then((value) => {
  console.log("Promise에서 받은 값:", value); // "데이터"
});

/* 결과
Promise 생성됨 - 상태: pending
Promise 반환 완료
생성된 Promise: Promise { <pending> }
콜백 실행 - resolve 호출 전
resolve 호출 완료 - 상태: fulfilled
Promise에서 받은 값: 데이터
*/
