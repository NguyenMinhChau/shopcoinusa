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
            src={src}
            alt={alt}
            className={cx('image-cp', className)}
        />
    );
}
Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default Image;
