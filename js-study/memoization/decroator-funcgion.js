function memoize(fn) {
  const cache = new Map();

  // // 숫자를 캐시의 키로 사용합니다.
  // map.set("[3,1]", 4);
  // // 함수를 캐시의 키로 사용합니다.
  // map.set("[function increment(), function double()]", 42);

  // 새로운 함수를 반환 (이것이 memoizedAdd가 됨)
  return function (...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    // args = [3, 4]일 때
    // 이렇게 하면 안 됨
    // fn(args);  // add([3, 4]) - 배열 하나를 전달

    // 이렇게 해야 함
    // fn.apply(this, args);  // add(3, 4) - 각각을 인수로 전달
    //...args는 "들어오는 모든 인수를 배열로 모아주는" 역할이고, apply는 "배열을 다시 개별 인수로 펼쳐주는" 역할입니다.

    const result = fn.apply(this, args); // 원본 add 함수 호출
    cache.set(key, result);

    return result;
  };
}

function add(a, b) {
  return a + b;
}

// memoize(add)는 새로운 함수를 반환
const memoizedAdd = memoize(add);

console.log(memoizedAdd(3, 4)); // 결과를 계산하고 캐시합니다.
console.log(memoizedAdd(3, 4)); // 캐시 된 결과를 반환합니다.
console.log(memoizedAdd(5, 6)); // 새 결과를 계산하여 캐시합니다.
console.log(memoizedAdd(3, 4)); // 여전히 캐시에서 결과를 검색합니다.
