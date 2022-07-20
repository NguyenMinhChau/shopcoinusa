import { useRef, useState, useEffect } from 'react';
import className from 'classnames/bind';
import { GoogleReCaptcha } from 'react-google-recaptcha-v3';
import ReCAPTCHA from 'react-google-recaptcha';
import { Button, Input, Form } from '../../components';
import { useShopcoinContext } from '../../hooks';
import { actions } from '../../app/';
import styles from './Signup.module.css';

const cx = className.bind(styles);

function Signup() {
    const { state, dispatch } = useShopcoinContext();
    const { username, email, password, recaptcha } = state.dataRegister;
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorUsername, setErrorUsername] = useState('');
    const emailRef = useRef();
    const passwordRef = useRef();
    const userNameRef = useRef();
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
        userNameRef.current.addEventListener('blur', () => {
            if (userNameRef.current.value === '') {
                setErrorUsername('This field is required');
            } else {
                setErrorUsername('');
            }
        });
    });
    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        dispatch(
            actions.dataRegister({ ...state.dataRegister, [name]: value })
        );
    };
    const handleVerifyCaptchaV2 = () => {
        dispatch(
            actions.dataRegister({
                ...state.dataRegister,
                recaptcha: captchaRef.current.getValue(),
            })
        );
    };
    const handleShowPwd = () => {
        dispatch(actions.showPwdRegister(!state.showPwdRegister));
    };
    const handleVerifyCaptchaV3 = () => {
        console.log('Verify captcha V3');
    };
    const onSubmit = (e) => {
        e.preventDefault();
        console.log('Data value: ', state.dataRegister);
        dispatch(
            actions.dataRegister({
                username: '',
                email: '',
                password: '',
                recaptcha: '',
            })
        );
        captchaRef.current.reset();
    };
    return (
        <Form titleForm='REGISTER' descRegister linkRegister linkLogin>
            <div className={cx('input-item')}>
                <p className={cx('label')}>Username</p>
                <Input
                    type='text'
                    name='username'
                    placeholder='Enter your user name'
                    ref={userNameRef}
                    className={cx('input-custom')}
                    onChange={handleChangeInput}
                    value={username}
                />
                <p className={cx('error')}>{errorUsername}</p>
            </div>
            <div className={cx('input-item')}>
                <p className={cx('label')}>Email</p>
                <Input
                    type='email'
                    name='email'
                    placeholder='Enter your email address'
                    ref={emailRef}
                    className={cx('input-custom')}
                    onChange={handleChangeInput}
                    value={email}
                />
                <p className={cx('error')}>{errorEmail}</p>
            </div>
            <div className={cx('input-item')}>
                <p className={cx('label')}>Password</p>
                <div className={cx('showPwd')}>
                    <Input
                        type={state.showPwdRegister ? 'text' : 'password'}
                        name='password'
                        placeholder='Enter your password'
                        ref={passwordRef}
                        className={cx('input-custom')}
                        onChange={handleChangeInput}
                        value={password}
                    />
                    <span
                        className={cx('icon-toogle-pwd')}
                        onClick={handleShowPwd}
                    >
                        {state.showPwdRegister ? (
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
                    onChange={handleVerifyCaptchaV2}
                    className={cx('g-recaptcha')}
                />
            </div>
            <div className={cx('input-item')}>
                <Button
                    large
                    primary
                    className={cx('button-submit')}
                    onClick={onSubmit}
                    disabled={
                        errorUsername ||
                        errorEmail ||
                        errorPassword ||
                        !username ||
                        !email ||
                        !password ||
                        !recaptcha
                    }
                >
                    Register
                </Button>
            </div>
        </Form>
    );
}

export default Signup;
