import InformationLayout from './InformationLayout';
import PropTypes from 'prop-types';

export default function Information({ status }) {
	let { isDraw, currentPlayer, isGameEnded } = status;

	let currentStatus;
	if (isDraw) {
		currentStatus = 'Ничья!';
	} else if (!isDraw && isGameEnded) {
		currentStatus = `Победа: ${currentPlayer}`;
	} else {
		currentStatus = `Ходит: ${currentPlayer}`;
	}

	return <InformationLayout currentStatus={currentStatus} />;
}

Information.propTypes = {
	status: PropTypes.object,
};
