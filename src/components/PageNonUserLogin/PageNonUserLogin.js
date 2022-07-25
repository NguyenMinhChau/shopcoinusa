import className from 'classnames/bind';
import { Link } from 'react-router-dom';
import { routes } from '../../Routes';
import { IconsPageNotFound } from '../Icons';
import styles from './PageNonUserLogin.module.css';

const cx = className.bind(styles);

function PageNonUserLogin() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <IconsPageNotFound />
                <h3 className={cx('content-title')}>
                    Có vẻ bạn chưa đăng nhập 😥
                </h3>
                <Link to={routes.login}>Back to the login page</Link>
            </div>
            <Link to='https://nuxtjs.org/' className={cx('link-nuxt')}>
                Nuxt
            </Link>
        </div>
    );
}

export default PageNonUserLogin;
