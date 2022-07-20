import className from 'classnames/bind';
import { routes } from '../../../Routes';
import { Button } from '../../';
import WrapperProfile from '../WrapperProfile';
import styles from './Withdrawal.module.css';

const cx = className.bind(styles);

function Withdrawal() {
    return (
        <WrapperProfile>
            <h3 className={cx('title')}>WITHDRAW FUNDS</h3>
            <Button
                to={routes.profilewithdrawcreate}
                primary
                className={cx('withdrawal-button')}
            >
                Create Withdraw
            </Button>
            <p className={cx('withdrawal-desc')}>
                You don't Have any withdraws
            </p>
        </WrapperProfile>
    );
}

export default Withdrawal;
