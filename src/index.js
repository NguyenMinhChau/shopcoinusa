import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ShopCoinusaProvider } from './app/';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ShopCoinusaProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ShopCoinusaProvider>
    </React.StrictMode>
);
