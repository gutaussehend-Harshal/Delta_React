import React, { useState } from "react";

function LudoBoard() {
  const [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });
  const [arr, setArr] = useState(["no moves"]);

  let updateBlue = () => {
    // setMoves((prevMoves) => {
    //   return { ...prevMoves, blue: prevMoves.blue + 1 };
    // });

    // arr.push("blue moves");
    setArr((prevArr) => {
      return [...prevArr, "blue moves"];
    });
  };

  let updateYellow = () => {
    // setMoves((prevMoves) => {
    //   return { ...prevMoves, yellow: prevMoves.yellow + 1 };
    // });

    setArr((prevArr) => {
      return [...prevArr, "yellow moves"];
    });
  };

  return (
    <div>
      <p>Game Begins!</p>
      <p>{arr}</p>
      <div className="board">
        <p>Blue moves = {moves.blue}</p>
        <button onClick={updateBlue} style={{ backgroundColor: "blue" }}>
          +1
        </button>
        <p>Yellow moves = {moves.yellow}</p>
        <button
          onClick={updateYellow}
          style={{ backgroundColor: "yellow", color: "black" }}
        >
          +1
        </button>
        <p>Green moves = {moves.green}</p>
        <button style={{ backgroundColor: "green" }}>+1</button>
        <p>Red moves = {moves.red}</p>
        <button style={{ backgroundColor: "red" }}>+1</button>
      </div>
    </div>
  );
}

export default LudoBoard;
