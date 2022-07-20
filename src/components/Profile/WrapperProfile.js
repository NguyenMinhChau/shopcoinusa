import PropTypes from 'prop-types';
import className from 'classnames/bind';
import { Sidebar } from '..';
import styles from './WrapperProfile.module.css';

const cx = className.bind(styles);

function WrapperProfile({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Sidebar />
            <div className={cx('content')}>{children}</div>
        </div>
    );
}
WrapperProfile.propTypes = {
    children: PropTypes.node.isRequired,
};
export default WrapperProfile;
