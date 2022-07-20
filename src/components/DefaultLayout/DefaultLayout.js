import PropTypes from 'prop-types';
import className from 'classnames/bind';
import styles from './DefaultLayout.module.css';
import { Header, Footer } from './';

const cx = className.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={`${cx('wrapper')}`}>
            <Header />
            <div className={`${cx('content-wrapper')}`}>{children}</div>
            <Footer />
        </div>
    );
}
DefaultLayout.propTypes = {
    children: PropTypes.node,
};
export default DefaultLayout;
