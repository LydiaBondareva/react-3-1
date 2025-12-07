import PropTypes from 'prop-types';
import styles from './field.module.css';

export default function FieldLayout({ field, onClick }) {
	const cells = field.map((cell, index) => (
		<button key={index} className={styles.cell} onClick={() => onClick(index)}>
			{cell}
		</button>
	));

	return <div className={styles.field}>{cells}</div>;
}

FieldLayout.propTypes = {
	field: PropTypes.array,
	onClick: PropTypes.func,
};
