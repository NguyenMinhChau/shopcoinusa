import className from 'classnames/bind';
import { useEffect } from 'react';
import styles from './Contactus.module.css';

const cx = className.bind(styles);

function Contactus() {
    useEffect(() => {
        document.title = 'Conatct us - Shop Coin USA';
    }, []);
    return (
        <div className={cx('wrapper')}>
            <p className={cx('desc')}>
                If you have any questions about trading with SHOPCOINUSA, do not
                hesitate to contact our Support team by.
            </p>
            <p className={cx('desc')}>Email: spshopcoinusa@gmail.com</p>
        </div>
    );
}

export default Contactus;
