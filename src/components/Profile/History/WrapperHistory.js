import { useEffect, useState } from 'react';
import className from 'classnames/bind';
import { routes } from '../../../Routes';
import { Button } from '../../';
import WrapperProfile from '../WrapperProfile';
import BuyHistory from './BuyHistory/BuyHistory';
import SellHistory from './SellHistory/SellHistory';
import styles from './WrapperHistory.module.css';

const cx = className.bind(styles);

function WrapperHistory() {
    const [pathname, setPathName] = useState('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        setPathName(window.location.pathname);
    });
    return (
        <WrapperProfile>
            {/* SELL HISTORY */}
            {pathname && pathname.includes(routes.profilesellhistory) && (
                <SellHistory />
            )}
            {/* BUTTON */}
            <div className={cx('history-button-container')}>
                <Button
                    to={routes.profilebuyhistory}
                    className={cx('history-button')}
                >
                    Buy History
                </Button>
                <Button
                    to={routes.profilesellhistory}
                    className={cx('history-button')}
                >
                    Sell History
                </Button>
            </div>
            {/* BUY HISTORY */}
            {pathname && pathname.includes(routes.profilebuyhistory) && (
                <BuyHistory />
            )}
            {/* DESC */}
            <p className={cx('desc')}>You don't have any transactions yet</p>
        </WrapperProfile>
    );
}

export default WrapperHistory;
