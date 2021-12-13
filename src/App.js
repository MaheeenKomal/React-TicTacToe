import React from "react";
import { useState } from "react";
import "./App.css";

function Square(props) {
  return <h3 onClick={props.onClick}>{props.value}</h3>;
}
// function isBoardFull(square) {
//   for (let i = 0; i < square.length; i++) {
//     if (square[i] == null) {
//       return false;
//     }
//   }
//   return true;
// }
function Board() {
  const [state, setState] = useState(Array(9).fill(null));
  const [next, setNext] = useState(true);

  const handleClick = (index) => {
    const square = [...state];
    if (square[index]) return;
    square[index] = next ? "X" : "0";
    setState(square);
    setNext(!next);
  };
  function Winner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  const renderSquare = (index) => {
    return <Square value={state[index]} onClick={(e) => handleClick(index)} />;
  };

  let status;
  const win = Winner(state);

  status = win
    ? ` Winner is ${win}`
    : `Now : ${next ? "Player X" : "Player 0"}`;

  // const box = values.map((numbers) => <h3>{renderSquare(0)}</h3>);
  return (
    <>
      <div class="container text-center">
        <h1>TIC TAC TOE</h1>
        <h2>{status}</h2>
        <div className=" board">
          <div className="d-flex">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="d-flex">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="d-flex">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
      </div>
    </>
  );
}
function App() {
  return <Board />;
}

export default App;
