export default function GameOver({ winner, hasDraw, onRestart }) {
  return (
    <div id='game-over'>
      <h1>Game Over!!</h1>
      {winner && <p>{winner} has won !!</p>}
      {!winner && <p>It's a draw</p>}
      <button onClick={onRestart}>Rematch</button>
    </div>
  );
}
