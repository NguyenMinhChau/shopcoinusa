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
} from '../handleForm';
import styles from './Forgot.module.css';

const cx = className.bind(styles);

function Forgot() {
    const { state, dispatch } = useShopcoinContext();
    const { email, recaptcha } = state.dataForm;
    const [errorEmail, setErrorEmail] = useState('');
    const emailRef = useRef();
    const captchaRef = useRef();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        checkEmailInput(emailRef, setErrorEmail);
    });
    const onSubmit = (e) => {
        console.log('Data value: ', state.dataForm);
        resetForm(e, dispatch, actions, captchaRef);
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
                    onChange={(e) =>
                        handleChangeInput(e, state, dispatch, actions)
                    }
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
                    disabled={errorEmail || !email || !recaptcha}
                >
                    Send
                </Button>
            </div>
        </Form>
    );
}

export default Forgot;
