import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { ShopcoinProvider } from './app/';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GoogleReCaptchaProvider reCaptchaKey='6LdKV_kgAAAAAKWVXnpbY1Uh8xGXYvstmaJpohqG'>
            <ShopcoinProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ShopcoinProvider>
        </GoogleReCaptchaProvider>
    </React.StrictMode>
);
