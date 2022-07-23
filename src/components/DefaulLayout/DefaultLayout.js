import className from 'classnames/bind';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import styles from './DefaultLayout.module.css';

const cx = className.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('content')}>{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
