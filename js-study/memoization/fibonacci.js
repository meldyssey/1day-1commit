function memoize(fn) {
  const cache = new Map();

  function memoizedFunction(...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn.apply(this, args);
    cache.set(key, result);

    return result;
  }

  // Object.defineProperty를 사용하여 memoizedFunction의 name 속성을 memoized_${fn.name}과 같이 보다 설명적인 값으로 설정합니다(여기서 fn.name은 원래 함수의 이름입니다). configurable 속성을 설정하려면 필요한 경우 속성을 추가로 수정하거나 삭제할 수 있습니다.

  memoizedFunction.clear = function clear() {
    cache.clear();
  };

  Object.defineProperty(memoizedFunction, "name", {
    value: `memoized_${fn.name}`,
    configurable: true,
  });

  // clear 메서드 추가: 캐시를 비울 수 있습니다.

  return memoizedFunction;
}

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

const memoizedFibonacci = memoize(fibonacci);

function measurePerformance(func, arg) {
  const startTime = process.hrtime.bigint();
  const result = func(arg);
  const endTime = process.hrtime.bigint();
  // 나노초를 밀리초로 변환합니다.
  const duration = (endTime - startTime) / BigInt(1000000);
  console.log(`${func.name}(${arg}) = ${result}, Time: ${duration}ms`);
}

const n = 42;

// 메모이제이션된 피보나치를 측정합니다.
measurePerformance(memoizedFibonacci, n);

// 메모이제이션된 피보나치 두 번째 호출을 측정합니다.
measurePerformance(memoizedFibonacci, n);

// 캐시를 지우고 다시 측정합니다.
console.log("Clearing cache and measuring again:");
memoizedFibonacci.clear();
measurePerformance(memoizedFibonacci, n);
