function counter() {
  let privateValue = 0; // 외부에서 절대 직접 접근 불가

  return {
    increment: function () {
      privateValue++;
    },
    decrement: function () {
      privateValue--;
    },
    getValue: function () {
      return privateValue;
    },
  };
}

const myCounter = counter();
const yourCounter = counter();

myCounter.increment();
myCounter.increment();
console.log(`myCounter.getValue(): ${myCounter.getValue()}`); // 2

// yourCounter는 자기만의 0에서 시작합니다.
console.log(`yourCounter.getValue(): ${yourCounter.getValue()}`); // 0
yourCounter.increment();
console.log(`yourCounter.getValue(): ${yourCounter.getValue()}`); // 1

// 다시 myCounter를 봐도 여전히 2입니다. (영향 없음)
console.log(`myCounter.getValue(): ${myCounter.getValue()}`); // 2
