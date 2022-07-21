import React, { useEffect } from 'react';
import className from 'classnames/bind';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import { DataGrid } from '@mui/x-data-grid/DataGrid';
import { routes } from '../../Routes';
import { useShopcoinContext } from '../../hooks';
import { actions } from '../../app/';
import { Image } from '../';
import styles from './Home.module.css';

const cx = className.bind(styles);

function Home() {
    const { state, dispatch } = useShopcoinContext();
    const { scrollTop, sortZA, sort90 } = state.toogle;
    const { dataCoins } = state.set;
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
        dispatch(
            actions.setData({
                ...state.set,
                dataCoins: res.data.coins,
            })
        );
    };
    const handleSortAZ = () => {
        dispatch(
            actions.setData(
                dataCoins.sort((a, b) =>
                    a.symbol.slice(0, 3).localeCompare(b.symbol.slice(0, 3))
                )
            )
        );
        dispatch(
            actions.toogle({
                ...state.toogle,
                sortZA: true,
            })
        );
    };
    const handleSortZA = () => {
        dispatch(
            actions.setData(
                dataCoins.sort((a, b) =>
                    b.symbol.slice(0, 3).localeCompare(a.symbol.slice(0, 3))
                )
            )
        );
        dispatch(
            actions.toogle({
                ...state.toogle,
                sortZA: false,
            })
        );
    };
    const handleSort09 = () => {
        dispatch(
            actions.setData(
                dataCoins.sort((a, b) => a.lastPrice.localeCompare(b.lastPrice))
            )
        );
        dispatch(
            actions.toogle({
                ...state.toogle,
                sort90: true,
            })
        );
    };
    const handleSort90 = () => {
        dispatch(
            actions.setData(
                dataCoins.sort((a, b) => b.lastPrice.localeCompare(a.lastPrice))
            )
        );
        dispatch(
            actions.toogle({
                ...state.toogle,
                sort90: false,
            })
        );
    };
    useEffect(() => {
        getTokenAndData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        const handleScrollTop = () => {
            if (window.scrollY > 200) {
                dispatch(
                    actions.toogle({
                        ...state.toogle,
                        scrollTop: true,
                    })
                );
            } else {
                dispatch(
                    actions.toogle({
                        ...state.toogle,
                        scrollTop: false,
                    })
                );
            }
        };
        window.addEventListener('scroll', handleScrollTop);
        return () => {
            window.removeEventListener('scroll', handleScrollTop);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // const columns = [
    //     { field: 'id', headerName: 'ID' },
    //     {
    //         field: 'logo',
    //         headerName: 'Logo',
    //         sortable: false,
    //         renderCell: (params) => {
    //             return (
    //                 <Image
    //                     src={params.value.url}
    //                     alt={params.value.name}
    //                     title={params.value.name}
    //                     className={cx('logo_company')}
    //                 />
    //             );
    //         },
    //     },
    //     {
    //         field: 'name',
    //         headerName: 'Name',
    //         valueGetter: (paramsGetValue) => {
    //             return `${paramsGetValue.value || ''}`;
    //         },
    //     },
    //     {
    //         field: 'price',
    //         headerName: 'Price',
    //         sortable: false,
    //         renderCell: (params) => {
    //             return (
    //                 <span
    //                     className={cx(
    //                         `${
    //                             params.value.priceChangePercent < 0
    //                                 ? 'text-red'
    //                                 : 'text-green'
    //                         }`
    //                     )}
    //                 >
    //                     {params.value.lastPrice}
    //                 </span>
    //             );
    //         },
    //     },
    //     {
    //         field: 'hightlow',
    //         headerName: '24h Hight/ Low',
    //         sortable: false,
    //         renderCell: (params) => {
    //             return (
    //                 <span
    //                     title={`${params.value.highPrice}/${params.value.lowPrice}`}
    //                 >
    //                     {params.value.highPrice}/{params.value.lowPrice}
    //                 </span>
    //             );
    //         },
    //     },
    //     {
    //         field: 'buy',
    //         headerName: '',
    //         sortable: false,
    //         renderCell: (params) => {
    //             return (
    //                 <Link className={cx('text-primary')} to={`${params.value}`}>
    //                     Buy
    //                 </Link>
    //             );
    //         },
    //     },
    // ];
    // const rows =
    //     dataCoins.length > 0 &&
    //     dataCoins.map((coin) => {
    //         return {
    //             id: coin.index,
    //             logo: {
    //                 name: coin.fullName,
    //                 url: `https://cdn.shopcoinusa.com/${coin.logo}`,
    //             },
    //             name: `${coin.symbol.slice(0, 3)}/${coin.fullName}`,
    //             price: {
    //                 lastPrice: coin.lastPrice,
    //                 priceChangePercent: coin.priceChangePercent,
    //             },
    //             hightlow: {
    //                 highPrice: coin.highPrice,
    //                 lowPrice: coin.lowPrice,
    //             },
    //             buy: `${routes.coin}/${coin.symbol}`,
    //         };
    //     });
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('title')}>Market Trend</h3>
            {/* <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                style={{ height: '635px' }}
            /> */}

            <table className={cx('table-coin')}>
                <tbody>
                    <tr className={cx('thead')}>
                        {!sortZA ? (
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
                        {!sort90 ? (
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
                    {dataCoins.length > 0 ? (
                        dataCoins.map((coin, index) => (
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
            {scrollTop && (
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
