import { useState } from 'react';

const TicTacToe = () => {
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
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (i) => {
    if (board[i] || calculateWinner(board)) return;
    const newBoard = [...board];
    newBoard[i] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const winner = calculateWinner(board);
  const status = winner 
    ? `Winner: ${winner}` 
    : board.every(Boolean) 
      ? "Draw!" 
      : `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem', background: 'var(--glass-bg, rgba(255,255,255,0.05))', borderRadius: '12px', minHeight: '350px' }}>
      <h3 style={{ marginBottom: '1rem' }}>Tic Tac Toe</h3>
      <div style={{ marginBottom: '1rem', fontWeight: 'bold' }}>{status}</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '5px', background: 'var(--accent-primary)', padding: '5px', borderRadius: '8px' }}>
        {board.map((cell, i) => (
          <button 
            key={i} 
            onClick={() => handleClick(i)}
            style={{ 
              width: '80px', height: '80px', fontSize: '2rem', fontWeight: 'bold', 
              background: 'var(--bg-color, #1a1a1a)', color: cell === 'X' ? 'var(--accent-neon)' : 'var(--accent-primary)',
              border: 'none', cursor: 'pointer', borderRadius: '4px'
            }}
          >
            {cell}
          </button>
        ))}
      </div>
      <button 
        onClick={() => { setBoard(Array(9).fill(null)); setXIsNext(true); }}
        style={{ marginTop: '1.5rem', padding: '0.5rem 1rem', background: 'var(--accent-primary)', color: '#000', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
      >
        Restart Game
      </button>
    </div>
  );
};

export default TicTacToe;
