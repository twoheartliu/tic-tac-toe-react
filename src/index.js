import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./style.css";

const Cell = function(props) {
  // const [text, setText] = useState("");

  const onClickCell = () => {};
  return (
    <div className="cell" onClick={props.onClick}>
      {props.text}
    </div>
  );
};

const Chessborad = function() {
  const [n, setN] = useState(0);
  const [finished, setFinished] = useState(false);
  const [winner, setWinner] = useState('');
  const [cells, setCells] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]);
  const tell = cells => {
    for (let i = 0; i < 3; i++) {
      if (
        cells[i][0] === cells[i][1] &&
        cells[i][1] === cells[i][2] &&
        cells[i][0] !== null
      ) {
        setFinished(true);
        setWinner(cells[i][0]);
        break;
      }
    }
    for (let i = 0; i < 3; i++) {
      if (
        cells[0][i] === cells[1][i] &&
        cells[1][i] === cells[2][i] &&
        cells[0][i] !== null
      ) {
        setFinished(true);
        setWinner(cells[0][i]);
        break;
      }
    }
    if (
      cells[0][0] === cells[1][1] &&
      cells[1][1] === cells[2][2] &&
      cells[0][0] !== null
    ) {
      setFinished(true);
      setWinner(cells[0][0]);
    }
    if (
      cells[2][0] === cells[1][1] &&
      cells[1][1] === cells[2][0] &&
      cells[2][0] !== null
    ) {
      setFinished(true);
      setWinner(cells[2][0]);
    }
  };
  const onClickCell = (row, col) => {
    console.log("row", row);
    console.log("col", col);
    setN(n + 1);
    const copy = JSON.parse(JSON.stringify(cells));
    copy[row][col] = n % 2 === 0 ? "x" : "o";
    setCells(copy);
    tell(copy);
  };
  return (
    <div>
      <div>n:{n}</div>
      {cells.map((item, row) => (
        <div key={row} className="row">
          {item.map((item, col) => (
            <div key={col} className="col">
              <Cell text={item} onClick={() => onClickCell(row, col)} />
            </div>
          ))}
        </div>
      ))}
      {finished && <div className="gameOver">
        <div className="description">游戏结束</div>
        <div className="winner">winner is 「{winner}」</div>
      </div>}
    </div>
  );
};
ReactDOM.render(
  <div>
    <Chessborad />
  </div>,
  document.getElementById("root")
);
