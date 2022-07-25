import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import className from 'classnames/bind';
import { GoogleReCaptcha } from 'react-google-recaptcha-v3';
import ReCAPTCHA from 'react-google-recaptcha';
import { useShopcoinContext } from '../../hooks';
import { actions } from '../../app/';
import {
    handleChangeInput,
    handleVerifyCaptchaV2,
    handleVerifyCaptchaV3,
    checkEmailInput,
    checkPwdInput,
    resetForm,
} from '../handleForm';
import { routes } from '../../Routes';
import { Button, Input, Form } from '../../components';
import styles from './Login.module.css';

const cx = className.bind(styles);

function Login() {
    const { state, dispatch } = useShopcoinContext();
    const { email, password, recaptcha } = state.dataForm;
    const { loginPwd } = state.showPwd;
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const emailRef = useRef();
    const passwordRef = useRef();
    const captchaRef = useRef();
    const history = useNavigate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        checkEmailInput(emailRef, setErrorEmail);
        checkPwdInput(passwordRef, setErrorPassword);
    });
    const handleShowPwd = () => {
        dispatch(
            actions.showPwd({
                ...state.showPwd,
                loginPwd: !loginPwd,
            })
        );
    };
    const onSubmit = (e) => {
        console.log('Data value: ', state.dataForm);
        resetForm(e, dispatch, actions, captchaRef);
        setTimeout(() => {
            dispatch(
                actions.setData({
                    ...state.set,
                    user: {},
                })
            );
            history(routes.home);
        }, 2000);
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
                    onChange={(e) =>
                        handleChangeInput(e, state, dispatch, actions)
                    }
                />
                <p className={cx('error')}>{errorEmail}</p>
            </div>
            <div className={cx('input-item')}>
                <p className={cx('label')}>Password</p>
                <div className={cx('showPwd')}>
                    <Input
                        type={loginPwd ? 'text' : 'password'}
                        name='password'
                        value={password}
                        placeholder='Enter your password'
                        ref={passwordRef}
                        className={cx('input-custom')}
                        onChange={(e) =>
                            handleChangeInput(e, state, dispatch, actions)
                        }
                    />
                    <span
                        className={cx('icon-toogle-pwd')}
                        onClick={handleShowPwd}
                    >
                        {loginPwd ? (
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
                    onChange={() =>
                        handleVerifyCaptchaV2(
                            state,
                            dispatch,
                            actions,
                            captchaRef
                        )
                    }
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
