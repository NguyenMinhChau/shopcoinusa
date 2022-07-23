import className from 'classnames/bind';
import { Link, NavLink } from 'react-router-dom';
import { routes } from '../../../Routes';
import { Image, Button } from '../../';
import styles from './Header.module.css';

const cx = className.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <Link to={routes.home} style={{ display: 'block' }}>
                <Image
                    src='/images/logo_header.png'
                    alt='logo_header'
                    className={cx('logo_header')}
                />
            </Link>
            <nav className={cx('wrapper-navbar')}>
                <NavLink
                    to={routes.home}
                    className={(nav) =>
                        cx('nav-item', {
                            active: nav.isActive,
                        })
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to={routes.depositwithdraw}
                    className={(nav) =>
                        cx('nav-item', {
                            active: nav.isActive,
                        })
                    }
                >
                    Deposit-Withdraw
                </NavLink>
                <NavLink
                    to={routes.blog}
                    className={(nav) =>
                        cx('nav-item', {
                            active: nav.isActive,
                        })
                    }
                >
                    Blog
                </NavLink>
                <NavLink
                    to={routes.aboutus}
                    className={(nav) =>
                        cx('nav-item', {
                            active: nav.isActive,
                        })
                    }
                >
                    About us
                </NavLink>
                <NavLink
                    to={routes.contactus}
                    className={(nav) =>
                        cx('nav-item', {
                            active: nav.isActive,
                        })
                    }
                >
                    Contact us
                </NavLink>
                <Button
                    primary
                    rounded
                    href={`http://localhost:3000/login`}
                    className={cx('nav-item', 'button-custom')}
                >
                    Login
                </Button>
            </nav>
        </div>
    );
}

export default Header;
