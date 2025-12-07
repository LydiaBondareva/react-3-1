import Information from './components/Information/Information';
import Field from './components/Field/Field';
import styles from './game.module.css';
import PropTypes from 'prop-types';

function GameLayout({
	field,
	setField,
	setIsGameEnded,
	setIsDraw,
	setCurrentPlayer,
	resetGame,
	...status
}) {
	return (
		<div className={styles.container}>
			<Information status={status} />
			<Field
				field={field}
				status={status}
				setField={setField}
				setIsGameEnded={setIsGameEnded}
				setIsDraw={setIsDraw}
				setCurrentPlayer={setCurrentPlayer}
			/>
			<button className={styles.reset} onClick={resetGame}>
				Начать заново
			</button>
		</div>
	);
}

export default GameLayout;

GameLayout.propTypes = {
	field: PropTypes.array,
	setField: PropTypes.func,
	setIsGameEnded: PropTypes.func,
	setIsDraw: PropTypes.func,
	setCurrentPlayer: PropTypes.func,
	resetGame: PropTypes.func,
	status: PropTypes.object,
};
