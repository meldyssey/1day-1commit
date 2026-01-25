// 기본 sort() - 문자열로 변환 후 사전순 정렬
let numbers = [10, 5, 40, 25, 1000, 1];
numbers.sort();
console.log(numbers); // [1, 10, 1000, 25, 40, 5] - 문자열로 변환되어 정렬!

// 비교 함수 구조 - 오름차순
numbers.sort((a, b) => {
  // 반환값에 따라 정렬 순서 결정
  // 음수: a가 b보다 앞에 위치
  if (a < b) return -1;
  // 양수: b가 a보다 앞에 위치
  if (a > b) return 1;
  // 0: 순서 변경 없음
  return 0;
});

console.log(numbers);

// 오름차순
numbers.sort((a, b) => a - b); // [1, 1, 3, 4, 5]
console.log(numbers);

// 내림차순
numbers.sort((a, b) => b - a); // [5, 4, 3, 1, 1]
console.log(numbers);

let arr = ["sun", "bed", "car"];
arr.sort((a, b) => {
  console.log(`비교: ${a} vs ${b}`);
  return a.localeCompare(b);
});

console.log(arr); // ["bed", "car", "sun"]

console.log("apple".localeCompare("banana")); // -1 (음수) apple 먼저
console.log("banana".localeCompare("apple")); // 1 (양수) banana 뒤
console.log("apple".localeCompare("apple")); // 0

arr = ["Apple", "apple", "Banana", "banana"];
arr.sort((a, b) => a.localeCompare(b));
console.log(arr);
// 결과: ["apple", "Apple", "banana", "Banana"]
// 대소문자 구분
console.log("apple".localeCompare("Apple")); // -1 (음수) 소문자가 먼저
