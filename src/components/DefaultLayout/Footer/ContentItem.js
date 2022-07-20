import PropTypes from 'prop-types';
import className from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const cx = className.bind(styles);

function ContentItem({ title, data }) {
    return (
        <div className={`${cx('content-item')}`}>
            <h3 className={`${cx('content-title')}`}>{title}</h3>
            <ul className={`${cx('content-list')}`}>
                {data.map((item, index) => (
                    <Link
                        key={index}
                        to={item.path ? item.path : '#'}
                        className={`${cx('content-list-item')}`}
                    >
                        {item.title}{' '}
                        <span className={cx('content-subTitle')}>
                            {item.subTitle ? item.subTitle : ''}
                        </span>
                    </Link>
                ))}
            </ul>
        </div>
    );
}
ContentItem.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
};

export default ContentItem;
