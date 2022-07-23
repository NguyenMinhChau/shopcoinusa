import { Fragment, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { publicRouter } from './RouterRender';
import { DefaultLayout } from './components';
import { useShopcoinusaContext } from './hooks';
import { actions } from './app/';
function App() {
    const { state, dispatch } = useShopcoinusaContext();
    const { isScrollTop } = state.toogle;
    useEffect(() => {
        const handleScrollTop = () => {
            if (window.scrollY > 200) {
                dispatch(
                    actions.toogle({
                        ...state.toogle,
                        isScrollTop: true,
                    })
                );
            } else {
                dispatch(
                    actions.toogle({
                        ...state.toogle,
                        isScrollTop: false,
                    })
                );
            }
        };
        document.addEventListener('scroll', handleScrollTop);
        return () => {
            document.removeEventListener('scroll', handleScrollTop);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className='app'>
            <Routes>
                {publicRouter.map((item, index) => {
                    const Layout = item.layout
                        ? item.layout
                        : item.layout === null
                        ? Fragment
                        : DefaultLayout;
                    const Page = item.component;
                    return (
                        <Route
                            key={index}
                            path={item.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
            {isScrollTop && (
                <div
                    className='scroll-top'
                    onClick={() => {
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth',
                        });
                    }}
                >
                    <i className='fas fa-chevron-up'></i>
                </div>
            )}
        </div>
    );
}

export default App;
