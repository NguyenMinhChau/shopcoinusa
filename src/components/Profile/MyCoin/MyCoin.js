import className from 'classnames/bind';
import WrapperProfile from '../WrapperProfile';
import styles from './MyCoin.module.css';

const cx = className.bind(styles);

function MyCoin() {
    return (
        <WrapperProfile>
            <h3 className={cx('title')}>My Coins</h3>
            <p className={cx('mycoin-desc')}>You don't Have any coins</p>
        </WrapperProfile>
    );
}

export default MyCoin;
