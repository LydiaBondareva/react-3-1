import PropTypes from 'prop-types';
import styles from './information.module.css';

export default function InformationLayout({ currentStatus }) {
	return <div className={styles.display}>{currentStatus}</div>;
}

InformationLayout.propTypes = {
	currentStatus: PropTypes.string,
};
