import className from 'classnames/bind';
import { Link } from 'react-router-dom';
import { routes } from '../../../Routes';
import WrapperProfile from '../WrapperProfile';
import styles from './Withdrawal.module.css';

const cx = className.bind(styles);

function CreateWithdrawal() {
    return (
        <WrapperProfile>
            <h3 className={cx('title')}>WITHDRAW</h3>
            <div className={cx('your-withdrawal-info')}>
                <p className={cx('your-withdrawal-info-text')}>
                    Make Your Payment Info
                </p>
                <Link
                    className={cx('your-withdrawal-info-link')}
                    to={routes.profileeditgateway}
                >
                    Edit
                </Link>
            </div>
        </WrapperProfile>
    );
}

export default CreateWithdrawal;
