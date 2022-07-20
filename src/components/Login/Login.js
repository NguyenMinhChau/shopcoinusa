import { useRef, useState, useEffect } from 'react';
import className from 'classnames/bind';
import { GoogleReCaptcha } from 'react-google-recaptcha-v3';
import ReCAPTCHA from 'react-google-recaptcha';
import { useShopcoinContext } from '../../hooks';
import { actions } from '../../app/';
import { Button, Input, Form } from '../../components';
import styles from './Login.module.css';

const cx = className.bind(styles);

function Login() {
    const { state, dispatch } = useShopcoinContext();
    const { email, password, recaptcha } = state.dataLogin;
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const emailRef = useRef();
    const passwordRef = useRef();
    const captchaRef = useRef();
    useEffect(() => {
        emailRef.current.addEventListener('blur', () => {
            if (emailRef.current.value === '') {
                setErrorEmail('This field is required');
            } else if (
                !emailRef.current.value
                    .toLowerCase()
                    .match(
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/
                    )
            ) {
                setErrorEmail('Your email address is not correct');
            } else {
                setErrorEmail('');
            }
        });
        passwordRef.current.addEventListener('blur', () => {
            if (passwordRef.current.value === '') {
                setErrorPassword('This field is required');
            } else if (passwordRef.current.value.length < 6) {
                setErrorPassword('Use from 6 characters');
            } else if (
                !passwordRef.current.value.match(
                    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/
                )
            ) {
                setErrorPassword(
                    'Your password must have at least: 1 Lowercase, 1 Uppercase, and Digits'
                );
            } else {
                setErrorPassword('');
            }
        });
    });
    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        dispatch(actions.dataLogin({ ...state.dataLogin, [name]: value }));
    };
    const handleVerifyCaptchaV2 = () => {
        dispatch(
            actions.dataLogin({
                ...state.dataLogin,
                recaptcha: captchaRef.current.getValue(),
            })
        );
    };
    const handleShowPwd = () => {
        dispatch(actions.showPwdLogin(!state.showPwdLogin));
    };
    const handleVerifyCaptchaV3 = () => {
        console.log('Verify captcha V3');
    };
    const onSubmit = (e) => {
        e.preventDefault();
        console.log('Data value: ', state.dataLogin);
        dispatch(
            actions.dataLogin({
                email: '',
                password: '',
                recaptcha: '',
            })
        );
        captchaRef.current.reset();
    };
    return (
        <Form titleForm='LOG IN TO YOUR ACCOUNT' linkForgot linkRegister>
            <div className={cx('input-item')}>
                <p className={cx('label')}>Email</p>
                <Input
                    type='email'
                    name='email'
                    value={email}
                    placeholder='Enter your email address'
                    ref={emailRef}
                    className={cx('input-custom')}
                    onChange={handleChangeInput}
                />
                <p className={cx('error')}>{errorEmail}</p>
            </div>
            <div className={cx('input-item')}>
                <p className={cx('label')}>Password</p>
                <div className={cx('showPwd')}>
                    <Input
                        type={state.showPwdLogin ? 'text' : 'password'}
                        name='password'
                        value={password}
                        placeholder='Enter your password'
                        ref={passwordRef}
                        className={cx('input-custom')}
                        onChange={handleChangeInput}
                    />
                    <span
                        className={cx('icon-toogle-pwd')}
                        onClick={handleShowPwd}
                    >
                        {state.showPwdLogin ? (
                            <i className='fa-solid fa-eye'></i>
                        ) : (
                            <i className='fa-solid fa-eye-slash'></i>
                        )}
                    </span>
                </div>
                <p className={cx('error')}>{errorPassword}</p>
            </div>
            <div className={cx('input-item')}>
                <p className={cx('label')}>ReCAPTCHA</p>
                <GoogleReCaptcha onVerify={handleVerifyCaptchaV3} />
                <ReCAPTCHA
                    ref={captchaRef}
                    sitekey={process.env.REACT_APP_RECAPTCHA_SITEKEY}
                    className={cx('g-recaptcha')}
                    onChange={handleVerifyCaptchaV2}
                />
            </div>
            <div className={cx('input-item')}>
                <Button
                    large
                    primary
                    className={cx('button-submit')}
                    disabled={
                        errorEmail ||
                        errorPassword ||
                        !email ||
                        !password ||
                        !recaptcha
                    }
                    onClick={onSubmit}
                >
                    Login
                </Button>
            </div>
        </Form>
    );
}

export default Login;
