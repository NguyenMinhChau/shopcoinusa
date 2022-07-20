import className from 'classnames/bind';
import styles from './SellHistory.module.css';

const cx = className.bind(styles);

function SellHistory() {
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('title')}>Sell History</h3>
        </div>
    );
}

export default SellHistory;
