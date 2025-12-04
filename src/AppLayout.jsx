import styles from './appLayout.module.css';
import PropTypes from 'prop-types';

function AppLayout({ display, cells, resetGame }) {
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

export default AppLayout;

AppLayout.propTypes = {
	display: PropTypes.string,
	cells: PropTypes.array,
	resetGame: PropTypes.func,
};
