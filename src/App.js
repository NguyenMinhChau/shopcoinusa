import React, { Fragment, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { DefaultLayout, Image } from './components';
import { useShopcoinContext } from './hooks';
import { actions } from './app/';
import { publicRouter, privateRouter } from './RoutesRender';
function App() {
    const { state, dispatch } = useShopcoinContext();
    const { user } = state.set;
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
    useEffect(() => {
        getTokenAndData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            <div className='app'>
                {!user ? (
                    <Routes>
                        {publicRouter.map((route, index) => {
                            const Layout = route.layout
                                ? route.layout
                                : route.layout === null
                                ? Fragment
                                : DefaultLayout;
                            const Page = route.component;
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                    </Routes>
                ) : (
                    <Routes>
                        {privateRouter.map((route, index) => {
                            const Layout = route.layout
                                ? route.layout
                                : route.layout === null
                                ? Fragment
                                : DefaultLayout;
                            const Page = route.component;
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                    </Routes>
                )}
            </div>
            <div className='no-support'>
                <Image src='' alt='' className='logo-no-support' />
                <p className='desc'>Notice: Unsupported device 😥</p>
            </div>
        </>
    );
}

export default App;
