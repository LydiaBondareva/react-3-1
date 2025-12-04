import { useState } from 'react';
import styles from './app.module.css';

function App() {
	const cells = [];
	for (let i = 0; i < 9; i++) {
		cells.push(
			<div
				className={styles.cell}
				onClick={(event) => cellClicked(event)}
				key={i}
				id={i}
			></div>,
		);
	}
	const cellsArr = Array(9).fill('');

	const [currentPlayer, setCurrentPlayer] = useState('крестики');
	const [gameFinished, setGameFinished] = useState('');
	const [gameCells, setGameCells] = useState(cellsArr);

	let display;
	if (gameFinished === 'draw') {
		display = 'Ничья!';
	} else if (gameFinished === 'win') {
		display = `Победили ${currentPlayer === 'нолики' ? 'крестики' : 'нолики'}`;
	} else {
		display = `Ходят ${currentPlayer}`;
	}

	function cellClicked(event) {
		if (gameCells[event.target.id] || gameFinished) {
			return;
		}

		setCurrentPlayer((prev) => {
			return prev === 'крестики' ? 'нолики' : 'крестики';
		});

		event.target.textContent = currentPlayer === 'крестики' ? 'Х' : 'O';
		const newCells = [...gameCells];
		newCells[event.target.id] = event.target.textContent;
		setGameCells(newCells);

		if (checkRes(newCells)) {
			setGameFinished('win');
		} else if (newCells.length >= 9 && newCells.every((cell) => cell !== '')) {
			setGameFinished('draw');
		}
	}

	function checkRes(cells) {
		const win = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];

		return win.some((end) => {
			const [a, b, c] = end;
			return cells[a] && cells[a] === cells[b] && cells[a] === cells[c];
		});
	}

	function resetGame() {
		setCurrentPlayer('крестики');
		setGameFinished('');
		setGameCells(cellsArr);
		let allCells = document.querySelectorAll(`.${styles.cell}`);
		allCells.forEach((c) => (c.textContent = ''));
	}

	return (
		<div className={styles.container}>
			<div className={styles.display}>{display}</div>
			<div className={styles.game}>{cells}</div>
			<button className={styles.reset} onClick={resetGame}>
				Начать заново
			</button>
		</div>
	);
}

export default App;
