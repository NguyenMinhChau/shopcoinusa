import PropTypes from 'prop-types';
import className from 'classnames/bind';
import styles from './Image.module.css';

const cx = className.bind(styles);

function Image({ src, alt, className }) {
    return (
        <img
            onError={(e) => {
                e.target.src = '/images/logo_header.png';
            }}
            className={cx('image', className)}
            src={src}
            alt={alt}
        />
    );
}
Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default Image;
