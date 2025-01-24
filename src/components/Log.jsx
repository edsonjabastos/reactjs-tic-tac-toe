export default function Log({ turns }) {
  console.log(turns);
  return (
    <ol id="log">
      {turns.map((turn) => {
        const { player, square } = turn;
        const { row, col } = square;
        return (
          <li key={`${row}-${col}`}>
            {player} selected row: {row} and col: {col}
          </li>
        );
      })}
    </ol>
  );
}
gameTurns