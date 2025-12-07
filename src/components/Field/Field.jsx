import FieldLayout from './FieldLayout';
import { win } from '../../constants';
import PropTypes from 'prop-types';

export default function Field({
	field,
	status,
	setField,
	setIsGameEnded,
	setIsDraw,
	setCurrentPlayer,
}) {
	let { currentPlayer, isGameEnded } = status;

	function onClick(index) {
		if (field[index] !== '' || isGameEnded) {
			return;
		}

		let newField = [...field];
		newField[index] = currentPlayer;
		setField(newField);

		const winner = win.some((combination) => {
			const [a, b, c] = combination;
			return newField[a] && newField[a] === newField[b] && newField[a] === newField[c];
		});

		if (winner) {
			setIsGameEnded(true);
		} else if (!winner && newField.every((cell) => cell !== '')) {
			setIsDraw(true);
		} else if (!winner && !newField.every((cell) => cell !== '')) {
			setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');
		}
	}

	return (
		<>
			<FieldLayout field={field} onClick={onClick} />
		</>
	);
}

Field.propTypes = {
	field: PropTypes.array,
	setField: PropTypes.func,
	setIsGameEnded: PropTypes.func,
	setIsDraw: PropTypes.func,
	setCurrentPlayer: PropTypes.func,
	status: PropTypes.object,
};
