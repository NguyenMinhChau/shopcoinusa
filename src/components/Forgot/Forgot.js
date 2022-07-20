import { useRef, useState, useEffect } from 'react';
import className from 'classnames/bind';
import { GoogleReCaptcha } from 'react-google-recaptcha-v3';
import ReCAPTCHA from 'react-google-recaptcha';
import { Button, Input, Form } from '../../components';
import { useShopcoinContext } from '../../hooks';
import { actions } from '../../app/';
import styles from './Forgot.module.css';

const cx = className.bind(styles);

function Forgot() {
    const { state, dispatch } = useShopcoinContext();
    const { email, recaptcha } = state.dataForgotPwd;
    const [errorEmail, setErrorEmail] = useState('');
    const emailRef = useRef();
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
    });
    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        dispatch(
            actions.dataForgotPwd({ ...state.dataForgotPwd, [name]: value })
        );
    };
    const handleVerifyCaptchaV2 = () => {
        dispatch(
            actions.dataForgotPwd({
                ...state.dataForgotPwd,
                recaptcha: captchaRef.current.getValue(),
            })
        );
    };
    const handleVerifyCaptchaV3 = () => {
        console.log('Verify captcha V3');
    };
    const onSubmit = (e) => {
        e.preventDefault();
        console.log('Data value: ', state.dataForgotPwd);
        dispatch(
            actions.dataForgotPwd({
                email: '',
                recaptcha: '',
            })
        );
        captchaRef.current.reset();
    };
    return (
        <Form titleForm='FORGOT YOUR PASSWORD ?'>
            <p className={cx('desc')}>
                To reset your password, enter the email address that you used to
                set up your account. We'll send you a link to help you get back
                into your account.
            </p>
            <div className={cx('input-item')}>
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
                    disabled={errorEmail || !email || !recaptcha}
                >
                    Send
                </Button>
            </div>
        </Form>
    );
}

export default Forgot;
