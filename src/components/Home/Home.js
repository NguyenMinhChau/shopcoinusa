import React, { useEffect } from 'react';
import className from 'classnames/bind';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useShopcoinContext } from '../../hooks';
import { actions } from '../../app/';
import { routes } from '../../Routes';
import { Image } from '../';
import styles from './Home.module.css';

const cx = className.bind(styles);

function Home() {
    const { state, dispatch } = useShopcoinContext();
    const getTokenAndData = async () => {
        const response = await axios.post(process.env.REACT_APP_AUTH_LOGIN, {
            email: process.env.REACT_APP_EMAIL,
            password: process.env.REACT_APP_PASSWORD,
        });
        const res = await axios.get(process.env.REACT_APP_API_COIN, {
            headers: {
                Authorization: `Bearer ${response.data.token}`,
            },
        });
        dispatch(actions.setDataCoins(res.data.coins));
    };
    const handleSortAZ = () => {
        dispatch(
            actions.setDataCoins(
                state.dataCoins.sort((a, b) =>
                    a.symbol.slice(0, 3).localeCompare(b.symbol.slice(0, 3))
                )
            )
        );
        dispatch(actions.sortZA(true));
    };
    const handleSortZA = () => {
        dispatch(
            actions.setDataCoins(
                state.dataCoins.sort((a, b) =>
                    b.symbol.slice(0, 3).localeCompare(a.symbol.slice(0, 3))
                )
            )
        );
        dispatch(actions.sortZA(false));
    };
    const handleSort09 = () => {
        dispatch(
            actions.setDataCoins(
                state.dataCoins.sort((a, b) =>
                    a.lastPrice.localeCompare(b.lastPrice)
                )
            )
        );
        dispatch(actions.sort90(true));
    };
    const handleSort90 = () => {
        dispatch(
            actions.setDataCoins(
                state.dataCoins.sort((a, b) =>
                    b.lastPrice.localeCompare(a.lastPrice)
                )
            )
        );
        dispatch(actions.sort90(false));
    };
    useEffect(() => {
        getTokenAndData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        const handleScrollTop = () => {
            if (window.scrollY > 200) {
                dispatch(actions.tooglescrollTop(true));
            } else {
                dispatch(actions.tooglescrollTop(false));
            }
        };
        window.addEventListener('scroll', handleScrollTop);
        return () => {
            window.removeEventListener('scroll', handleScrollTop);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('title')}>Market Trend</h3>
            <table className={cx('table-coin')}>
                <tbody>
                    <tr className={cx('thead')}>
                        {!state.sortZA ? (
                            <th onClick={handleSortAZ}>
                                Name{' '}
                                <span className={cx('icon-sort')}>
                                    <i className='fa-solid fa-arrow-down-a-z'></i>
                                </span>
                            </th>
                        ) : (
                            <th onClick={handleSortZA}>
                                Name{' '}
                                <span className={cx('icon-sort')}>
                                    <i className='fa-solid fa-arrow-down-z-a'></i>
                                </span>
                            </th>
                        )}
                        {!state.sort90 ? (
                            <th onClick={handleSort09}>
                                Price{' '}
                                <span className={cx('icon-sort')}>
                                    <i className='fa-solid fa-arrow-down-1-9'></i>
                                </span>
                            </th>
                        ) : (
                            <th onClick={handleSort90}>
                                Price{' '}
                                <span className={cx('icon-sort')}>
                                    <i className='fa-solid fa-arrow-down-9-1'></i>
                                </span>
                            </th>
                        )}
                        <th>24h Hight/ Low</th>
                        <th></th>
                    </tr>
                    {state.dataCoins.length > 0 ? (
                        state.dataCoins.map((coin, index) => (
                            <tr key={index} className={cx('tbody')}>
                                <td>
                                    <Image
                                        src={`https://cdn.shopcoinusa.com/${coin.logo}`}
                                        alt={coin.fullName}
                                        className={cx('logo_company')}
                                    />{' '}
                                    <p
                                        className={cx('name')}
                                        title={`BTC/${coin.fullName}`}
                                    >
                                        <span>{coin.symbol.slice(0, 3)}/</span>{' '}
                                        <span className={cx('fullname-coin')}>
                                            {coin.fullName}
                                        </span>
                                    </p>
                                </td>
                                <td
                                    className={cx(
                                        `${
                                            coin.priceChangePercent < 0
                                                ? 'text-red'
                                                : 'text-green'
                                        }`
                                    )}
                                >
                                    {coin.lastPrice}
                                </td>
                                <td>
                                    {coin.highPrice}/{coin.lowPrice}
                                </td>
                                <td>
                                    <Link to={`${routes.coin}/${coin.symbol}`}>
                                        Buy
                                    </Link>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr style={{ textAlign: 'center' }}>
                            <td style={{ padding: '12px' }} colSpan='4'>
                                Đang tải dữ liệu ...
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            {state.tooglescrollTop && (
                <div
                    className={cx('button-scroll-top')}
                    onClick={() => {
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth',
                        });
                    }}
                >
                    <i className='fa-solid fa-arrow-up'></i>
                </div>
            )}
        </div>
    );
}

export default Home;
