function memoizeAdd() {
  const cache = {};

  return function memoizedAdd(a, b) {
    const key = `${a},${b}`;

    if (key in cache) {
      return cache[key];
    } else {
      const result = a + b;

      cache[key] = result;

      return result;
    }
  };
}

const memoizedAdd = memoizeAdd();

console.log(memoizedAdd(3, 4)); // 결과를 계산하고 캐시합니다.
console.log(memoizedAdd(3, 4)); // 캐시에서 결과를 검색합니다.
console.log(memoizedAdd(5, 6)); // 새 결과를 계산하고 캐시합니다.
console.log(memoizedAdd(3, 4)); // 여전히 캐시에서 결과를 검색합니다.
