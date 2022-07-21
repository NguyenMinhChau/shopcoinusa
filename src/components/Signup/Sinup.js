import { useRef, useState, useEffect } from 'react';
import className from 'classnames/bind';
import { GoogleReCaptcha } from 'react-google-recaptcha-v3';
import ReCAPTCHA from 'react-google-recaptcha';
import { Button, Input, Form } from '../../components';
import { useShopcoinContext } from '../../hooks';
import { actions } from '../../app/';
import {
    handleChangeInput,
    handleVerifyCaptchaV2,
    handleVerifyCaptchaV3,
    resetForm,
    checkEmailInput,
    checkPwdInput,
    checkUsernameInput,
} from '../handleForm';
import styles from './Signup.module.css';

const cx = className.bind(styles);

function Signup() {
    const { state, dispatch } = useShopcoinContext();
    const { username, email, password, recaptcha } = state.dataForm;
    const { registerPwd } = state.showPwd;
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorUsername, setErrorUsername] = useState('');
    const emailRef = useRef();
    const passwordRef = useRef();
    const userNameRef = useRef();
    const captchaRef = useRef();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        checkEmailInput(emailRef, setErrorEmail);
        checkPwdInput(passwordRef, setErrorPassword);
        checkUsernameInput(userNameRef, setErrorUsername);
    });
    const handleShowPwd = () => {
        dispatch(
            actions.showPwd({
                ...state.showPwd,
                registerPwd: !registerPwd,
            })
        );
    };
    const onSubmit = (e) => {
        console.log('Data value: ', state.dataForm);
        resetForm(e, dispatch, actions, captchaRef);
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
                    onChange={(e) =>
                        handleChangeInput(e, state, dispatch, actions)
                    }
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
                    onChange={(e) =>
                        handleChangeInput(e, state, dispatch, actions)
                    }
                    value={email}
                />
                <p className={cx('error')}>{errorEmail}</p>
            </div>
            <div className={cx('input-item')}>
                <p className={cx('label')}>Password</p>
                <div className={cx('showPwd')}>
                    <Input
                        type={registerPwd ? 'text' : 'password'}
                        name='password'
                        placeholder='Enter your password'
                        ref={passwordRef}
                        className={cx('input-custom')}
                        onChange={(e) =>
                            handleChangeInput(e, state, dispatch, actions)
                        }
                        value={password}
                    />
                    <span
                        className={cx('icon-toogle-pwd')}
                        onClick={handleShowPwd}
                    >
                        {registerPwd ? (
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
                    onChange={() =>
                        handleVerifyCaptchaV2(
                            state,
                            dispatch,
                            actions,
                            captchaRef
                        )
                    }
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
