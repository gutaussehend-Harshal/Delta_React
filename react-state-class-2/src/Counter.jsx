import React from "react";
import { useState, useEffect } from "react";

function Counter() {
  const [countX, setCountX] = useState(0);
  const [countY, setCountY] = useState(0);

  let incCountX = () => {
    setCountX(countX + 1);
  };

  let incCountY = () => {
    setCountY(countY + 1);
  };

  useEffect(
    function printSomething() {
      console.log("useEffect called");
    },
    [countX]
  );

  return (
    <div>
      <h3>CountX = {countX}</h3>
      <button onClick={incCountX}>+1</button>

      <h3>CountY = {countY}</h3>
      <button onClick={incCountY}>+1</button>
    </div>
  );
}

export default Counter;
