import className from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useShopcoinContext } from '../../../hooks';
import { actions } from '../../../app/';
import { routes } from '../../../Routes';
import ChangePassword from '../ChangePassword/ChangePassword';
import WrapperProfile from '../WrapperProfile';
import styles from './Profile.module.css';

const cx = className.bind(styles);

function Profile() {
    const { state, dispatch } = useShopcoinContext();
    const { changePwd } = state.toogle;
    const handleChangePwd = (e) => {
        e.stopPropagation();
        dispatch(
            actions.toogle({
                ...state.toogle,
                changePwd: !changePwd,
            })
        );
    };
    const handleContentChangePwdClick = (e) => {
        e.stopPropagation();
        dispatch(
            actions.toogle({
                ...state.toogle,
                changePwd: true,
            })
        );
    };
    return (
        <WrapperProfile>
            <h3 className={cx('title')}>User Information</h3>
            <ul className={cx('info-list')}>
                <li className={cx('info-item')}>
                    <p className={cx('item-desc')}>Username:</p>
                    <p className={cx('item-title')}>NguyenMinhChau</p>
                </li>
                <li className={cx('info-item')}>
                    <p className={cx('item-desc')}>Email Address:</p>
                    <p className={cx('item-title')}>
                        nguyenminhchau5404@gmail.com
                    </p>
                </li>
                <li className={cx('info-item')}>
                    <p className={cx('item-desc')}>Password:</p>
                    <p
                        className={cx('item-title', 'item-modal-text')}
                        onClick={handleChangePwd}
                    >
                        Change Password
                    </p>
                </li>
            </ul>
            <h3 className={cx('title')}>Payment</h3>
            <p className={cx('desc-payment')}>
                support the following payment methods to load or withdraw funds.
            </p>
            <div className={cx('your-payment-info')}>
                <p className={cx('your-payment-info-text')}>
                    Your Payment Info
                </p>
                <Link
                    className={cx('your-payment-info-link')}
                    to={routes.profileeditgateway}
                >
                    Edit
                </Link>
            </div>
            {changePwd && (
                <ChangePassword
                    closeModal={handleChangePwd}
                    contentClick={handleContentChangePwdClick}
                />
            )}
        </WrapperProfile>
    );
}

export default Profile;
