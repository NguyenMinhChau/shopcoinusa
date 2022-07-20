import className from 'classnames/bind';
import { Link } from 'react-router-dom';
import TippyHeadless from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import styles from './Header.module.css';
import { Image, Button } from '../../';
import { routes } from '../../../Routes';

const cx = className.bind(styles);

function Header() {
    return (
        <div className={`${cx('wrapper')}`}>
            <div className={`${cx('content')}`}>
                <div className={cx('logo-container')}>
                    <Link to={routes.home}>
                        <Image
                            src='/images/logo_header.png'
                            alt='logo_header'
                            className={`${cx('logo-header')}`}
                        />
                    </Link>
                </div>
                <nav className={`${cx('nav-container')}`}>
                    <ul className={`${cx('nav-menu')}`}>
                        <TippyHeadless
                            hideOnClick={false}
                            delay={[0, 300]}
                            interactive={true}
                            appendTo={document.body}
                            render={(attrs) => (
                                <ul
                                    className={cx('dropdown')}
                                    tabIndex='-1'
                                    {...attrs}
                                >
                                    <Link
                                        to={routes.profile}
                                        className={cx('dropdown-item')}
                                    >
                                        Dashboard
                                    </Link>
                                    <Link
                                        to={routes.profilemycoin}
                                        className={cx('dropdown-item')}
                                    >
                                        My Coins
                                    </Link>
                                    <Link
                                        to={routes.profiledeposit}
                                        className={cx('dropdown-item')}
                                    >
                                        Deposit
                                    </Link>
                                    <Link
                                        to={routes.profilewithdraw}
                                        className={cx('dropdown-item')}
                                    >
                                        Withdraw
                                    </Link>
                                </ul>
                            )}
                        >
                            <li className={`${cx('nav-menu-item')}`}>
                                My Control
                            </li>
                        </TippyHeadless>
                        <Link
                            to={routes.partner}
                            className={`${cx('nav-menu-item')}`}
                        >
                            Partner
                        </Link>
                        <Link
                            to={routes.contact}
                            className={`${cx('nav-menu-item')}`}
                        >
                            Contact
                        </Link>
                    </ul>
                    <ul className={`${cx('nav-user')}`}>
                        <Button
                            className={`${cx(
                                'nav-user-item',
                                'nav-user-item-btn'
                            )}`}
                        >
                            $0.00 USDT
                        </Button>
                        <TippyHeadless
                            hideOnClick={false}
                            delay={[0, 300]}
                            interactive={true}
                            appendTo={document.body}
                            render={(attrs) => (
                                <ul
                                    className={cx(
                                        'dropdown',
                                        'dropdown-item-custom'
                                    )}
                                    tabIndex='-1'
                                    {...attrs}
                                >
                                    <li className={cx('dropdown-item')}>
                                        <span
                                            className={cx('dropdown-item-icon')}
                                        >
                                            <i className='fa-solid fa-arrow-right-from-bracket'></i>
                                        </span>{' '}
                                        <span
                                            className={cx('dropdown-item-text')}
                                        >
                                            Logout
                                        </span>
                                    </li>
                                </ul>
                            )}
                        >
                            <li className={`${cx('nav-user-item')}`}>
                                <Link
                                    to={routes.profile}
                                    className={`${cx('nav-user-item-name')}`}
                                >
                                    NguyenMinhChau
                                </Link>{' '}
                                <Button
                                    className={`${cx('nav-user-item-status')}`}
                                    rouded
                                >
                                    Standard
                                </Button>
                            </li>
                        </TippyHeadless>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;
