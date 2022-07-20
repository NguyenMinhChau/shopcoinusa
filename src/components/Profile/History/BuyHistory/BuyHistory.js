import className from 'classnames/bind';
import styles from './BuyHistory.module.css';

const cx = className.bind(styles);

function BuyHistory() {
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('title')}>Buy History</h3>
        </div>
    );
}

export default BuyHistory;
