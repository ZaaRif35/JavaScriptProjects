import React, {
  useState,
  useEffect,
  useMemo,
  useRef
} from "react";
import { useHistoryTravel } from "ahooks";
import { IconO, IconX } from "./Icons";
import "./styles.scss";

// write your code here


// ------------------------------

function hasWinner(_boardData, marker, rowIndex, cellIndex) {
  const size = _boardData.length;
  // col
  let winningCells = [];

  for (let i = 0; i < size; i++) {
    if (_boardData[i][cellIndex].marker !== marker) break;
    winningCells.push([i, cellIndex]);
    if (i === size - 1) {
      return {
        line: "vertical",
        winner: marker,
        winningCells
      };
    }
  }

  winningCells = [];
  // row
  for (let i = 0; i < size; i++) {
    if (_boardData[rowIndex][i].marker !== marker) break;
    winningCells.push([rowIndex, i]);
    if (i === size - 1) {
      return {
        line: "horizontal",
        winner: marker,
        winningCells
      };
    }
  }

  // diagonal
  if (rowIndex === cellIndex) {
    winningCells = [];
    for (let i = 0; i < size; i++) {
      if (_boardData[i][i].marker !== marker) break;
      winningCells.push([i, i]);
      if (i === size - 1) {
        return {
          line: "diagonal",
          winner: marker,
          winningCells
        };
      }
    }
  }

  // inverted diagonal
  if (rowIndex + cellIndex === size - 1) {
    winningCells = [];
    for (let i = 0; i < size; i++) {
      if (_boardData[i][size - 1 - i].marker !== marker) break;
      winningCells.push([i, size - 1 - i]);
      if (i === size - 1) {
        return {
          line: "inverted-diagonal",
          winner: marker,
          winningCells
        };
      }
    }
  }

  return {};
}

function Board(props) {
  const { initialBoardData = [] } = props;
  const size = initialBoardData.length;
  const {
    value,
    setValue,
    backLength,
    forwardLength,
    back,
    forward,
    go,
    reset
  } = useHistoryTravel({
    ...initialStateForTimeTravel,
    boardData: initialBoardData
  });

  const { boardData, gameOver, moveCount, turn, winner } = value;

  function handlePlayerMove(cell) {
    const { rowIndex, cellIndex } = cell;
    if (!isValidMove(boardData[rowIndex][cellIndex].marker)) return;

    const newState = { ...value };
    const _newBoardData = JSON.parse(JSON.stringify(boardData));
    _newBoardData[rowIndex][cellIndex].marker = turn;

    const winResult = hasWinner(_newBoardData, turn, rowIndex, cellIndex);
    const { line, winner, winningCells } = winResult;

    if (winner) {
      newState.winner = winner;
      newState.gameOver = true;
      for (let i = 0; i < winningCells.length; i++) {
        _newBoardData[winningCells[i][0]][winningCells[i][1]].won = true;
        _newBoardData[winningCells[i][0]][winningCells[i][1]].line = line;
      }
    } else {
      newState.moveCount++;
      newState.turn = turn === "O" ? "X" : "O";
      if (newState.moveCount === Math.pow(size, 2)) {
        newState.gameOver = true;
      }
    }

    newState.boardData = _newBoardData;

    setValue(newState);
  }

  const firstUpdate = useRef(true);
  useEffect(function setupEffect() {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    reset({
      ...initialStateForTimeTravel,
      boardData: initialBoardData
    });
  }, [initialBoardData]);

  function handleOnReset() {
    reset();
  }

  return (
    <div className="board-container">
      <div className="board-info">
        {gameOver ? (
          <GameOver winner={winner} />
        ) : (
          <TurnIndicator turn={turn} />
        )}
      </div>
      <div className="board">
        <div className="board-inner">
          {boardData.map(function renderRow(row, index) {
            return (
              <Row
                key={index}
                data={boardData}
                onPlayerMove={handlePlayerMove}
                rowIndex={index}
                gameOver={gameOver}
              />
            );
          })}
        </div>
      </div>
      <div className="board-controls">
        <div>
          <button className="btn-undo" disabled={!backLength} onClick={back}>
            Undo
          </button>
          <button
            className="btn-redo"
            disabled={!forwardLength}
            onClick={forward}
          >
            Redo
          </button>
        </div>
        <button
          disabled={!backLength && !forwardLength}
          onClick={handleOnReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

function TicTacToe(props) {
  const { size: _size = 3, maxSize = 9 } = props;
  const minSize = 3;
  const [size, setSize] = useState(_size);
  const initialBoardData = useMemo(function getInitialBoardData() {
    return getBoardLayout(size);
  }, [size]);

  // controller data
  const [targetSize, setTargetSize] = useState(size);

  function handleOnChangeInputSize(e) {
    setTargetSize(parseInt(e.target.value.slice(0, 1), 10));
  }

  function handleCreateBoard() {
    if (targetSize >= minSize && targetSize <= maxSize) {
      setSize(targetSize);
    } else {
      setTargetSize(size);
    }
  }

  return (
    <div className="game-container">
      <div className="game-config">
        <input
          className="input-boardsize"
          type="number"
          onChange={handleOnChangeInputSize}
          placeholder="size"
          value={targetSize}
        />
        <button
          className="btn-createboard"
          disabled={
            targetSize === size || targetSize < minSize || targetSize > maxSize
          }
          onClick={handleCreateBoard}
        >
          Create board
        </button>
      </div>
      <Board initialBoardData={initialBoardData} />
    </div>
  );
}