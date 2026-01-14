// 1. 기본 타입 정의
// AnyFunction: "어떤 함수든 받을 수 있는 타입"
// (...args: any[]) = 인수를 몇 개든 받을 수 있음
// => any = 어떤 타입이든 반환할 수 있음
type AnyFunction = (...args: any[]) => any;

// 2. 메모이제이션된 함수의 타입 정의
// T는 타입변수 (예: T가 (a: number, b: number) => number 라면)
interface MemoizedFunction<T extends AnyFunction> extends CallableFunction {
  // CallableFunction: JavaScript의 내장 인터페이스
  // - 함수로 호출할 수 있다는 것을 TypeScript에게 알려줌
  // - call(), apply(), bind() 메서드들을 제공
  // - 즉, 이 인터페이스를 상속받으면 함수처럼 동작할 수 있음

  // Parameters<T>: T함수의 매개변수 타입들을 배열로 추출
  // ReturnType<T>: T함수의 반환 타입 추출
  // 즉, 원본 함수와 똑같은 매개변수와 반환 타입을 가짐
  (...args: Parameters<T>): ReturnType<T>;

  // 캐시를 지우는 메서드 추가
  clear: () => void;
}

// 3. CallableFunction 이해를 위한 예시
// CallableFunction을 상속받지 않으면:
interface NotCallableExample {
  clear: () => void;
  // 함수 호출 시그니처가 없음 - 함수로 호출할 수 없음
}

// CallableFunction을 상속받으면:
interface CallableExample extends CallableFunction {
  (...args: any[]): any; // 함수 호출 시그니처 - 함수로 호출 가능
  clear: () => void;
  // 추가로 call, apply, bind 메서드도 자동으로 포함됨
}

// 4. 간단한 버전으로 이해하기 (위와 동일한 의미)
interface SimpleMemoizedFunction {
  // 함수로 호출할 수 있고 (CallableFunction의 역할)
  (...args: any[]): any;
  // 캐시를 지우는 메서드가 있음
  clear: () => void;
}

// 5. 메모이제이션 함수
// <T extends AnyFunction>: T는 함수 타입이어야 함
// fn: T: 메모이제이션할 원본 함수
// 반환값: MemoizedFunction<T> (원본 함수 + 캐시 기능)
function memoize<T extends AnyFunction>(fn: T): MemoizedFunction<T> {
  // 캐시 저장소
  // 키: string (JSON.stringify로 만든 문자열)
  // 값: ReturnType<T> (원본 함수의 반환 타입)
  const cache = new Map<string, ReturnType<T>>();

  // 실제로 반환될 메모이제이션된 함수
  const memoizedFunction = function (...args: Parameters<T>): ReturnType<T> {
    // 인수들을 문자열로 변환해서 캐시 키 생성
    // 예: [3, 4] → "[3,4]"
    const key = JSON.stringify(args);

    // 캐시에 결과가 있으면 즉시 반환
    if (cache.has(key)) {
      // get(key)!: !는 "null이 아니라고 확신한다"는 의미
      return cache.get(key)!;
    }

    // 캐시에 없으면 원본 함수 실행
    const result = fn(...args);

    // 결과를 캐시에 저장
    cache.set(key, result);

    // 결과 반환
    return result;
  } as MemoizedFunction<T>;
  // 타입 캐스팅: clear 메서드가 포함된 타입으로 변환
  // CallableFunction을 상속받았으므로 함수로 호출 가능함을 TypeScript에게 알림

  // clear 메서드 추가: 캐시를 모두 지움
  memoizedFunction.clear = function clear() {
    cache.clear();
  };

  // 함수 이름을 "memoized_원본함수이름"으로 설정
  // 디버깅할 때 어떤 함수인지 알아보기 쉽게 함
  Object.defineProperty(memoizedFunction, "name", {
    value: `memoized_${fn.name}`, // 예: "memoized_fibonacci"
    configurable: true,
  });

  // 메모이제이션 기능이 추가된 함수 반환
  // CallableFunction 덕분에 이 반환값을 함수처럼 호출할 수 있음
  return memoizedFunction;
}

// 6. 피보나치 함수 (메모이제이션 테스트용)
function fibonacci(n: number): number {
  // 기본 케이스: 0과 1은 그대로 반환
  if (n <= 1) {
    return n;
  }

  // ❌ 이렇게 하면 재귀 호출 시 메모이제이션이 적용되지 않음
  // return fibonacci(n - 1) + fibonacci(n - 2);

  // ✅ 이렇게 해야 재귀 호출도 메모이제이션됨
  // memoizedFibonacci를 호출하므로 중간 결과들도 캐시됨
  return memoizedFibonacci(n - 1) + memoizedFibonacci(n - 2);
}

// 7. 피보나치 함수를 메모이제이션
// CallableFunction 덕분에 memoizedFibonacci를 함수처럼 호출할 수 있음
const memoizedFibonacci = memoize(fibonacci);

// 8. 성능 측정 함수
function measurePerformance(
  // func: 메모이제이션된 피보나치 함수
  // typeof fibonacci: fibonacci 함수의 타입 추출 (n: number) => number
  // MemoizedFunction<typeof fibonacci>는 CallableFunction을 상속받으므로
  // 함수로 호출 가능함이 보장됨
  func: MemoizedFunction<typeof fibonacci>,
  arg: number // 피보나치 수열의 몇 번째 수를 계산할지
) {
  // 시작 시간 측정 (나노초 단위의 고정밀 시간)
  const startTime = process.hrtime.bigint();

  // 함수 실행 - CallableFunction 덕분에 func(arg) 호출 가능
  const result = func(arg);

  // 종료 시간 측정
  const endTime = process.hrtime.bigint();

  // 실행 시간 계산
  // 나노초를 밀리초로 변환 (1,000,000으로 나누기)
  const duration = (endTime - startTime) / BigInt(1000000);

  // 결과 출력: 함수이름(인수) = 결과, 실행시간
  // func.name도 CallableFunction의 속성으로 접근 가능
  console.log(`${func.name}(${arg}) = ${result}, Time: ${duration}ms`);
}

// 9. 실제 테스트
const n = 42; // 피보나치 수열의 42번째 수

// 첫 번째 호출: 계산이 필요함 (상당히 느림)
// memoizedFibonacci(n) - CallableFunction 덕분에 함수 호출 가능
console.log("=== 첫 번째 호출 (계산 필요) ===");
measurePerformance(memoizedFibonacci, n);

// 두 번째 호출: 캐시에서 즉시 반환 (매우 빠름)
// 이미 계산된 결과가 캐시에 있으므로 즉시 반환
console.log("=== 두 번째 호출 (캐시에서 반환) ===");
measurePerformance(memoizedFibonacci, n);

// 캐시 초기화 후 다시 테스트
console.log("=== 캐시 지우고 다시 측정 ===");
memoizedFibonacci.clear(); // clear 메서드 호출

// 캐시가 비어있으므로 다시 계산 필요 (느림)
measurePerformance(memoizedFibonacci, n);

// n+1번째 수 계산 (n번째까지는 이미 캐시되어 있으므로 빠름)
measurePerformance(memoizedFibonacci, n + 1);
