function memoize(fn: any) {
  const cache = new Map();
  function memoizedFunction(...args: any[]) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn(...args);
    cache.set(key, result);

    return result;
  }
  return memoizedFunction;
}

function fibonacci(n: number): number {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const memoizedFibonacci = memoize(fibonacci) as typeof fibonacci;

const result = memoizedFibonacci(2);
console.log(result);
