import className from 'classnames/bind';
import { Link } from 'react-router-dom';
import { routes } from '../../Routes';
import {
    IconsBuyCoin,
    IconsMyCoin,
    IconsBuyHistory,
    IconsSellHistory,
    IconsMyProfile,
    IconsDeposits,
    IconsWithDrawal,
} from '../Icons';
import styles from './Sidebar.module.css';

const cx = className.bind(styles);

const SIDEBAR_LIST = [
    { id: 1, icon: <IconsBuyCoin />, title: 'Buy Coin', path: routes.home },
    {
        id: 2,
        icon: <IconsMyCoin />,
        title: 'My Coins',
        path: routes.profilemycoin,
    },
    {
        id: 3,
        icon: <IconsBuyHistory />,
        title: 'Buy History',
        path: routes.profilebuyhistory,
    },
    {
        id: 4,
        icon: <IconsSellHistory />,
        title: 'Sell History',
        path: routes.profilesellhistory,
    },
    {
        id: 5,
        icon: <IconsMyProfile />,
        title: 'My Profile',
        path: routes.profile,
    },
    {
        id: 6,
        icon: <IconsDeposits />,
        title: 'Deposits',
        path: routes.profiledeposit,
    },
    {
        id: 7,
        icon: <IconsWithDrawal />,
        title: 'Withdrawal',
        path: routes.profilewithdraw,
    },
];

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <ul className={cx('menu-list')}>
                {SIDEBAR_LIST.map((item, index) => (
                    <Link
                        key={index}
                        to={item.path}
                        className={cx('menu-list-item')}
                    >
                        {item.icon}
                        <span className={cx('menu-item-text')}>
                            {item.title}
                        </span>
                    </Link>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;
