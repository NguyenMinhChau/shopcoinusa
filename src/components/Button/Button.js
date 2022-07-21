import PropTypes from 'prop-types';
import className from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

const cx = className.bind(styles);

function Button({
    to,
    href,
    onClick,
    fontWeightNormal = false,
    disabled = false,
    primary = false,
    outline = false,
    small = false,
    large = false,
    text = false,
    rouded = false,
    children,
    className,
    ...passProps
}) {
    let Cp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') || typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    if (to) {
        props.to = to;
        Cp = Link;
    }
    if (href) {
        props.href = href;
        Cp = 'a';
    }
    const classNames = cx('button', {
        [className]: className,
        disabled,
        primary,
        outline,
        small,
        large,
        text,
        rouded,
        fontWeightNormal,
    });
    return (
        <Cp className={classNames} {...props}>
            {children}
        </Cp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    text: PropTypes.bool,
    rouded: PropTypes.bool,
    children: PropTypes.node.isRequired,
};

export default Button;
