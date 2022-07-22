import className from 'classnames/bind';
import { Link, useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useShopcoinContext } from '../../hooks';
import { routes } from '../../Routes';
import { Image } from '../';
import WrapperProfile from '../Profile/WrapperProfile';
import styles from './DetailCoin.module.css';

const cx = className.bind(styles);

function DetailCoin() {
    const { state } = useShopcoinContext();
    const { dataCoins } = state.set;
    const { slug } = useParams();
    const data = dataCoins.filter((item) => item.symbol === slug);
    return (
        <WrapperProfile>
            <h3 className={cx('title')}>BUY COIN</h3>
            <div className={cx('detail-coin-container')}>
                <div className={cx('detail-item', 'bgc-item')}>
                    {data && (
                        <>
                            {data[0]?.logo ? (
                                <Image
                                    src={`https://cdn.shopcoinusa.com/${data[0]?.logo}`}
                                    alt={data[0]?.fullName}
                                    className={cx('coin-logo-company')}
                                />
                            ) : (
                                <Skeleton
                                    circle
                                    height='64px'
                                    width='64px'
                                    containerClassName='avatar-skeleton'
                                />
                            )}
                            <ul className={cx('info-list')}>
                                <li className={cx('info-item')}>
                                    <p className={cx('item-desc')}>
                                        Coin Symbol:
                                    </p>
                                    {data[0]?.symbol ? (
                                        <p
                                            className={cx(
                                                'item-title',
                                                'bagde'
                                            )}
                                        >
                                            {data[0]?.symbol.slice(0, 3)}
                                        </p>
                                    ) : (
                                        <Skeleton width={70} />
                                    )}
                                </li>
                                <li className={cx('info-item')}>
                                    <p className={cx('item-desc')}>
                                        Coin Full Name:
                                    </p>
                                    {data[0]?.fullName ? (
                                        <p className={cx('item-title')}>
                                            {data[0]?.fullName}
                                        </p>
                                    ) : (
                                        <Skeleton width={70} />
                                    )}
                                </li>
                                <li className={cx('info-item')}>
                                    <p className={cx('item-desc')}>
                                        Coin Price:
                                    </p>
                                    {data[0]?.lastPrice ? (
                                        <p
                                            className={cx(
                                                'item-title',
                                                `${
                                                    data[0]
                                                        ?.priceChangePercent < 0
                                                        ? 'text-red'
                                                        : 'text-green'
                                                }`
                                            )}
                                        >
                                            {data[0]?.lastPrice}
                                        </p>
                                    ) : (
                                        <Skeleton width={70} />
                                    )}
                                </li>
                            </ul>
                        </>
                    )}
                </div>
                <div className={cx('detail-item')}>
                    <p className={cx('desc-right')}>
                        You Dont have enough USDT{' '}
                        <Link
                            to={routes.profiledepositcreate}
                            className={cx('link')}
                        >
                            Click Here
                        </Link>{' '}
                        To Make Deposit
                    </p>
                </div>
            </div>
        </WrapperProfile>
    );
}

export default DetailCoin;
