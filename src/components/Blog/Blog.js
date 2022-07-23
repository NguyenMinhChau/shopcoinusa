import className from 'classnames/bind';
import { useEffect } from 'react';
import styles from './Blog.module.css';

const cx = className.bind(styles);

function Blog() {
    useEffect(() => {
        document.title = 'Blog - Shop Coin USA';
    }, []);
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('title')}>Coming soon!!</h3>
        </div>
    );
}

export default Blog;
