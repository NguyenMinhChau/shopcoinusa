import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import { DefaultLayout, Image } from './components';
import { publicRouter } from './RoutesRender';
function App() {
    return (
        <>
            <div className='app'>
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
            </div>
            <div className='no-support'>
                <Image src='' alt='' className='logo-no-support' />
                <p className='desc'>Notice: Unsupported device 😥</p>
            </div>
        </>
    );
}

export default App;
