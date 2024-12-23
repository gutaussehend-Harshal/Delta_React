import { useState } from "react";

function init() {
  return Math.floor(Math.random() * 10) + 1;
}

export default function Counter() {
  const [count, setCount] = useState(init());

  let handleIncrement = () => {
    setCount((currCount) => {
      return currCount + 1;
    });
    setCount((currCount) => {
      return currCount + 1;
    });
  };

  let handleDecrement = () => {
    setCount(count - 1);
    setCount(count - 1);
    setCount(count - 1);
    setCount(count - 1);
  };

  //   setTimeout(() => {
  //     handleIncrement();
  //   }, 2000);

  return (
    <div>
      <h3>Count : {count}</h3>
      <button onClick={handleIncrement}>Increase Count</button>
      &nbsp;
      <button onClick={handleDecrement}>Decrease Count</button>
    </div>
  );
}
