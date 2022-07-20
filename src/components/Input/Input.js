import { forwardRef } from 'react';
import className from 'classnames/bind';
import styles from './Input.module.css';

const cx = className.bind(styles);

function Input({ type, name, placeholder, className, onChange, value }, ref) {
    return (
        <input
            type={type}
            className={cx('input', className)}
            name={name}
            placeholder={placeholder}
            ref={ref}
            onChange={onChange}
            value={value}
        />
    );
}

export default forwardRef(Input);
