import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  function handlePlus() {
    let num = count;
    num++;
    setCount(num);
  }
  function handleMinus() {
    let num = count;
    num--;
    setCount(num);
  }

  // return (
  //   <div>
  //     <div>Counter : {count}</div>
  //     <button onClick={handlePlus}>+</button>
  //     <button onClick={handleMinus}>-</button>
  //   </div>
  // );
  return (
    <div>
      <h1>Counter : {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}
