import { useState } from 'react';
import GameLayout from './GameLayout';

const cells = Array(9).fill('');
const PLAYERS = { CROSS: 'X', ZERO: 'O' };

export default function Game() {
	const [currentPlayer, setCurrentPlayer] = useState(PLAYERS.CROSS);
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(cells);

	function resetGame() {
		setCurrentPlayer(PLAYERS.CROSS);
		setField(cells);
		setIsDraw(false);
		setIsGameEnded(false);
	}

	return (
		<GameLayout
			field={field}
			setField={setField}
			setIsGameEnded={setIsGameEnded}
			setIsDraw={setIsDraw}
			setCurrentPlayer={setCurrentPlayer}
			currentPlayer={currentPlayer}
			isDraw={isDraw}
			isGameEnded={isGameEnded}
			resetGame={resetGame}
		/>
	);
}
