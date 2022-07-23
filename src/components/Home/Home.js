import className from 'classnames/bind';
import { routes } from '../../Routes';
import { Image } from '../';
import styles from './Home.module.css';
import { useEffect } from 'react';

const cx = className.bind(styles);

function Home() {
    useEffect(() => {
        document.title = 'Shop Coin USA';
    }, []);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <h1 className={cx('title')}>Download Shop Coin USA App</h1>
                <p className={cx('desc')}>
                    Manage crypto assets at your fingertips
                </p>
                <div className={cx('download-container')}>
                    <a href={routes.downloadapp}>
                        <Image
                            src='/images/home-button-download.png'
                            alt='img_download'
                            className={cx('img-download')}
                        />
                    </a>
                    <p className={cx('app-name-download')}>For Android</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
