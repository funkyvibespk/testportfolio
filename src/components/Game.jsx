import { useState } from 'react';
import { RefreshCw } from 'lucide-react';
import './Game.css';

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { winner: squares[a], line: lines[i] };
      }
    }
    return null;
  };

  const winInfo = calculateWinner(board);
  const winner = winInfo?.winner;
  const winningLine = winInfo?.line || [];
  const isDraw = !winner && board.every(square => square !== null);

  const handleClick = (i) => {
    if (board[i] || winner) return;
    const newBoard = [...board];
    newBoard[i] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (isDraw) {
    status = 'Draw!';
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <div className="game-container">
      <h2 className="section-title">
        Take a <span className="text-gradient">Break</span>
      </h2>
      
      <div className="game-wrapper glass-panel">
        <div className="game-header">
          <h3>Tic-Tac-Toe</h3>
          <button className="reset-btn" onClick={resetGame} aria-label="Reset game">
            <RefreshCw size={20} />
          </button>
        </div>
        
        <div className="game-status">{status}</div>
        
        <div className="board">
          {board.map((square, i) => (
            <button
              key={i}
              className={`square ${square ? 'filled' : ''} ${winningLine.includes(i) ? 'winning-square' : ''}`}
              onClick={() => handleClick(i)}
            >
              {square && (
                <span className={`mark ${square === 'X' ? 'mark-x' : 'mark-o'}`}>
                  {square}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Game;
