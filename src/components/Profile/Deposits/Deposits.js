import className from 'classnames/bind';
import { routes } from '../../../Routes';
import { Button } from '../../';
import WrapperProfile from '../WrapperProfile';
import styles from './Deposits.module.css';

const cx = className.bind(styles);

function Deposits() {
    return (
        <WrapperProfile>
            <h3 className={cx('title')}>DEPOSITS</h3>
            <Button
                to={routes.profiledepositcreate}
                primary
                className={cx('withdrawal-button')}
            >
                Create Deposit
            </Button>
            <p className={cx('withdrawal-desc')}>You don't Have any Deposits</p>
        </WrapperProfile>
    );
}

export default Deposits;
