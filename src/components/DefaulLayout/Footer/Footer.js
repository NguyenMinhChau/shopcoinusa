import className from 'classnames/bind';
import styles from './Footer.module.css';

const cx = className.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <p>
                Copyright {new Date().getFullYear()} ©{' '}
                <strong>Shop Coin USA</strong>
            </p>
        </div>
    );
}

export default Footer;
