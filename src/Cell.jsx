import styles from './cell.module.css';
import PropTypes from 'prop-types';

function Cell({ cellClicked, id }) {
	return (
		<div className={styles.cell} onClick={(event) => cellClicked(event)} id={id}></div>
	);
}

export default Cell;

Cell.propTypes = {
	cellClicked: PropTypes.func,
	id: PropTypes.number,
};
