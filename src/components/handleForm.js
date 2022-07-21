import BANK_LIST from './bankList';

export const handleChangeInput = (e, state, dispatch, actions) => {
    const { name, value } = e.target;
    dispatch(actions.dataForm({ ...state.dataForm, [name]: value }));
};
export const handleVerifyCaptchaV2 = (state, dispatch, actions, captchaRef) => {
    dispatch(
        actions.dataForm({
            ...state.dataForm,
            recaptcha: captchaRef.current.getValue(),
        })
    );
};
export const handleVerifyCaptchaV3 = () => {
    console.log('Verify captcha V3');
};
export const checkEmailInput = (emailRef, setErrorEmail) => {
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
};
export const checkPwdInput = (passwordRef, setErrorPassword) => {
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
};
export const checkUsernameInput = (userNameRef, setErrorUsername) => {
    userNameRef.current.addEventListener('blur', () => {
        if (userNameRef.current.value === '') {
            setErrorUsername('This field is required');
        } else {
            setErrorUsername('');
        }
    });
};
export const checkAccNameInput = (accNameRef, setErrorAccName) => {
    accNameRef.current.addEventListener('blur', () => {
        if (accNameRef.current.value === '') {
            setErrorAccName('This field is required');
        } else {
            setErrorAccName('');
        }
    });
};
export const checkAccNumberInput = (accNumberRef, setErrorAccNumber) => {
    accNumberRef.current.addEventListener('blur', () => {
        if (accNumberRef.current.value === '') {
            setErrorAccNumber('This field is required');
        } else if (isNaN(accNumberRef.current.value)) {
            setErrorAccNumber('This field must be a number');
        } else {
            setErrorAccNumber('');
        }
    });
};
export const checkAmountUSDTInput = (amoutUSDTRef, setErrorAmount) => {
    amoutUSDTRef.current.addEventListener('blur', () => {
        if (amoutUSDTRef.current.value === '') {
            setErrorAmount('This field is required');
        } else if (isNaN(amoutUSDTRef.current.value)) {
            setErrorAmount('This field must be a number');
        } else {
            setErrorAmount('');
        }
    });
};
export const checkDepositVNDInput = (depositsVNDTRef, setErrorDeposits) => {
    depositsVNDTRef.current.addEventListener('blur', () => {
        if (depositsVNDTRef.current.value === '') {
            setErrorDeposits('This field is required');
        } else if (isNaN(depositsVNDTRef.current.value)) {
            setErrorDeposits('This field must be a number');
        } else {
            setErrorDeposits('');
        }
    });
};
export const handleSetBankName = (id, state, dispatch, actions) => {
    BANK_LIST.forEach((item) => {
        if (item.id === id) {
            dispatch(
                actions.dataForm({
                    ...state.dataForm,
                    bankName: item.name,
                })
            );
        }
    });
};
export const resetForm = (e, dispatch, actions, captchaRef) => {
    e.preventDefault();
    dispatch(
        actions.dataForm({
            username: '',
            email: '',
            password: '',
            recaptcha: '',
            oldPassword: '',
            newPassword: '',
            bankName: '',
            accountName: '',
            accountNumber: '',
            amount: '',
            deposits: '',
        })
    );
    captchaRef?.current.reset();
};
