import className from 'classnames/bind';
import styles from './DepositWithdraw.module.css';

const cx = className.bind(styles);

function Divider({ content, title }) {
    return (
        <div className={cx('divider')}>
            {content && (
                <div className={cx('divider-content')}>
                    <p className={cx('divider-desc')}>{title}</p>
                </div>
            )}
        </div>
    );
}

export default Divider;
