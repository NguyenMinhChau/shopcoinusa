import PropTypes from 'prop-types';
import className from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

const cx = className.bind(styles);

function Button({
    to,
    href,
    onClick,
    primary = false,
    rounded = false,
    outline = false,
    small = false,
    large = false,
    medium = false,
    disabled = false,
    className,
    children,
    passProps,
}) {
    let Cmp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (to) {
        props.to = to;
        Cmp = Link;
    }
    if (href) {
        props.href = href;
        Cmp = 'a';
    }
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    const classes = cx('button', {
        [className]: className,
        primary,
        rounded,
        outline,
        small,
        large,
        medium,
        disabled,
    });
    return (
        <Cmp className={classes} {...props}>
            {children}
        </Cmp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
    primary: PropTypes.bool,
    rounded: PropTypes.bool,
    outline: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    medium: PropTypes.bool,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    passProps: PropTypes.node,
};

export default Button;
