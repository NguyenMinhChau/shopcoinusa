import className from 'classnames/bind';
import { Link } from 'react-router-dom';
import { routes } from '../../Routes';
import { IconsPageNotFound } from '../Icons';
import styles from './PageNotFound.module.css';

const cx = className.bind(styles);

function PageNotFound() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <IconsPageNotFound />
                <h3 className={cx('content-title')}>
                    This page could not be found
                </h3>
                <Link to={routes.home}>Back to the home page</Link>
            </div>
            <Link to='https://nuxtjs.org/' className={cx('link-nuxt')}>
                Nuxt
            </Link>
        </div>
    );
}

export default PageNotFound;
